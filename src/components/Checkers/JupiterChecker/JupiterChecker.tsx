import {useState} from "react";
import {IWalletData} from "../../../interfaces/IWalletData.ts";
import ResultsTable from "../../ResultsTable/ResultsTable.tsx";
import Creator from "../../Creator/Creator.tsx";
import {toast} from "react-toastify";
import Toast from "../../Toast/Toast.tsx";

const JupiterChecker = () => {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [results, setResults] = useState<IWalletData[]>([])
    const fetchWalletData = async (wallet: string): Promise<IWalletData> => {
        await new Promise(r => setTimeout(r, 250))

        try {
            const response = await fetch(`https://airdrop-api.jup.ag/allocation/${wallet}`, {
                "referrer": "https://airdrop.jup.ag/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET"
            })

            const json = await response.json().catch(() => null);

            if (json) {
                return ({
                    wallet: wallet,
                    amount: Number(json.tokens_final),
                    eligible: true
                })
            } else {
                return ({
                    wallet: wallet,
                    amount: 0,
                    eligible: false
                })
            }
        } catch (e) {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 10 seconds..."/>)
            await new Promise(r => setTimeout(r, 10000))
            return await fetchWalletData(wallet);
        }
    }

    const onClickCheck = async () => {
        setIsLoading(true)

        const wallets = input.toLowerCase().split("\n")
        const walletsData: IWalletData[] = []

        for (const wallet of wallets) {
            if (wallet === "") {
                setProgress(prevState => prevState + 1)
                continue
            }

            const walletData: IWalletData = await fetchWalletData(wallet)

            walletsData.push(walletData)
            setProgress(prevState => prevState + 1)
        }

        setResults(walletsData)
        setIsLoading(false)
        setProgress(0)
    }

    return (
        <div className="flex flex-col justify-center items-center pt-14 fadeIn">
            <div className="flex flex-row font-bold">
                <div className="badge badge-primary">$JUP</div>
                <h1 className="text-4xl">Airdrop Checker</h1>
            </div>
            <h2 className="text-2xl font-bold mt-7">Wallet addresses</h2>
            <p>(Be careful to enter only addresses, not private phrases or keys)</p>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Your wallet addresses"
                      className="textarea textarea-bordered textarea-md h-56 mt-3 resize-none" style={{width: "500px"}}/>
            <button className="btn btn-primary mt-3 w-56" onClick={onClickCheck} disabled={isLoading}>
                {isLoading
                    ? <span className="loading loading-ring loading-lg text-primary"></span>
                    : "CHECK"}
            </button>
            {isLoading && <progress className="progress progress-primary w-96 mt-3 fadeIn" value={progress}
                                    max={input.split("\n").length}></progress>}
            <Creator/>
            {results.length > 0 && <ResultsTable results={results} tokenName={"JUP"}/>}
        </div>
    )
}

export default JupiterChecker;