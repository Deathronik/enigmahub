import {useState} from "react";
import {IWalletData} from "../../../interfaces/IWalletData.ts";
import Creator from "../../Creator/Creator.tsx";
import ResultsTable from "../../ResultsTable/ResultsTable.tsx";
import {toast} from "react-toastify";
import Toast from "../../Toast/Toast.tsx";
import CaseAlert from "../Alerts/CaseAlert/CaseAlert.tsx";
import CorsAlert from "../Alerts/CorsAlert/CorsAlert.tsx";

const AltLayerChecker = () => {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [results, setResults] = useState<IWalletData[]>([])
    const fetchWalletData = async (wallet: string): Promise<IWalletData> => {
        try {
            const response = await fetch("https://airdrop.altlayer.io/", {
                "headers": {
                    "accept": "text/x-component",
                    "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                    "content-type": "text/plain;charset=UTF-8",
                    "next-action": "6817e8f24aae7e8aed1d5226e9b368ab8c1ded5d",
                    "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(homePage)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
                },
                "body": `["${wallet}"]`,
                "method": "POST"
            });

            const text = await response.text()
            const json = JSON.parse(text.split(('\n'))[1].split("1:")[1])

            if (json) {
                return {
                    "wallet": wallet,
                    "amount": Number(json.amount / 1000000000000000000),
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
            if (String(e).includes('Failed to fetch')) {
                console.error(e)
                toast(<Toast text="CORS error. Please use the extension to bypass"/>);
                await new Promise(r => setTimeout(r, 60000));
                return await fetchWalletData(wallet);
            } else {
                console.error(e)
                toast(<Toast text="Too many requests. Start waiting 45 seconds..."/>)
                await new Promise(r => setTimeout(r, 45000))
                return await fetchWalletData(wallet);
            }
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
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center pt-14 fadeIn flex-grow">
                <div className="flex flex-row font-bold">
                    <div className="badge badge-primary">$ALT</div>
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
                {results.length > 0 && <ResultsTable results={results} tokenName={"ALT"}/>}
            </div>
            <div className="flex flex-col justify-start items-center pl-24 pt-20">
                <CaseAlert/>
                <CorsAlert/>
            </div>
        </div>
    )
}

export default AltLayerChecker;