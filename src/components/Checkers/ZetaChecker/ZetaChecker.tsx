import {useState} from "react";
import {IWalletData} from "../../../interfaces/IWalletData.ts";
import ResultsTable from "../../ResultsTable/ResultsTable.tsx";
import Creator from "../../Creator/Creator.tsx";

const ZetaChecker = () => {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [results, setResults] = useState<IWalletData[]>([])
    const fetchWalletData = async (wallet: string): Promise<IWalletData> => {
        try {
            const response = await fetch(`https://airdrop-router.cl04.zetachain.com/pre-claim-status?address=${wallet}`, {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                    "cache-control": "max-age=0",
                    "upgrade-insecure-requests": "1"
                },
                "body": null,
                "method": "GET"
            })

            const json = await response.json()

            if (json.userCondition === "Eligible") {
                return {
                    "wallet": wallet,
                    "amount": Number(json.claimAmount),
                    "eligible": true
                }
            } else {
                return {
                    "wallet": wallet,
                    "amount": 0,
                    "eligible": false
                }
            }
        } catch (e) {
            console.error(e)
            await new Promise(r => setTimeout(r, 60000))
            return await fetchWalletData(wallet);
        }
    }

    const onClickCheck = async () => {
        setIsLoading(true)

        const wallets = input.split("\n")
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
                <div className="badge badge-primary">$ZETA</div>
                <h1 className="text-4xl">Airdrop Checker</h1>
            </div>
            <h2 className="text-2xl font-bold mt-7">Wallet addresses</h2>
            <p>(Be careful to enter only addresses, not private phrases or keys)</p>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Your wallet addresses"
                      className="textarea textarea-bordered textarea-md w-96 h-56 mt-3 resize-none"/>
            <button className="btn btn-primary mt-3 w-56" onClick={onClickCheck} disabled={isLoading}>
                {isLoading
                    ? <span className="loading loading-ring loading-lg text-primary"></span>
                    : "CHECK"}
            </button>
            {isLoading && <progress className="progress progress-primary w-96 mt-3 fadeIn" value={progress}
                                    max={input.split("\n").length}></progress>}
            <Creator/>
            {results.length > 0 && <ResultsTable results={results} tokenName={"ZETA"}/>}
        </div>
    )
}

export default ZetaChecker;