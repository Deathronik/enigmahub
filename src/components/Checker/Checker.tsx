import {useEffect, useRef, useState} from "react";
import {IWalletData} from "../../interfaces/IWalletData.ts";
import {clearCheckHistory, getCheckHistory, setCheckHistory} from "../../utils/checkHistory.ts";
import ResultsTable from "../ResultsTable/ResultsTable.tsx";
import CheckHistory from "../CheckHistory/CheckHistory.tsx";
import Creator from "../Creator/Creator.tsx";
import {IHistoryData} from "../../interfaces/IHistoryData.ts";
import CaseAlert from "../Alerts/CaseAlert/CaseAlert.tsx";
import CorsAlert from "../Alerts/CorsAlert/CorsAlert.tsx";


const Checker = ({airdropName, fetchWalletData, alerts}: {
    airdropName: string,
    fetchWalletData: (wallet: string) => Promise<IWalletData>,
    alerts?: string[]
}) => {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [results, setResults] = useState<IWalletData[]>([])
    const [airdropCheckHistory, setAirdropCheckHistory] = useState<IHistoryData[]>([])

    const isFirstRender = useRef(true);

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

        setCheckHistory(airdropName, walletsData.map(walletData => walletData.wallet))
        setAirdropCheckHistory(getCheckHistory(airdropName))
        setResults(walletsData)
        setIsLoading(false)
        setProgress(0)
    }

    const setInputByClickOnHistory = (wallets: string[]) => {
        setInput(wallets.join("\n"))
    }

    const clearAirdropCheckHistory = () => {
        clearCheckHistory(airdropName)
        setAirdropCheckHistory(getCheckHistory(airdropName))
    }

    useEffect(() => {
        isFirstRender.current = true;
        setAirdropCheckHistory(getCheckHistory(airdropName))

        setTimeout(() => isFirstRender.current = false, 100)

        return () => {
            setInput("");
            setResults([]);
            setAirdropCheckHistory([]);
        }
    }, [airdropName])

    return (
        <div className={`flex flex-row ${isFirstRender.current ? 'fadeIn' : ''}`}>
            <div className="flex flex-col justify-center items-center pt-14 flex-grow ml-auto">
                <div className="flex flex-row font-bold">
                    <div className="badge badge-primary">${airdropName.toUpperCase()}</div>
                    <h1 className="text-4xl">Airdrop Checker</h1>
                </div>
                <h2 className="text-2xl font-bold mt-7">Wallet addresses</h2>
                <p>(Be careful to enter only addresses, not private phrases or keys)</p>
                <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Your wallet addresses"
                          className="textarea textarea-bordered textarea-md h-56 mt-3 resize-none"
                          style={{width: "500px"}}/>
                <button className="btn btn-primary mt-3 w-56" onClick={onClickCheck} disabled={isLoading}>
                    {isLoading
                        ? <span className="loading loading-ring loading-lg text-primary"></span>
                        : "CHECK"}
                </button>
                {isLoading && <progress className="progress progress-primary w-96 mt-3 fadeIn" value={progress}
                                        max={input.split("\n").length}></progress>}
                <Creator/>
                {results.length > 0 && <ResultsTable results={results} tokenName={airdropName.toUpperCase()}/>}
            </div>
            <div className="flex flex-col">
                <div className="ml-20">
                    <CheckHistory airdropCheckHistory={airdropCheckHistory}
                                  setInputByClickOnHistory={setInputByClickOnHistory}
                                  clearAirdropCheckHistory={clearAirdropCheckHistory}/>
                </div>
                {alerts &&
                    <div className="flex flex-col justify-start items-center pl-24 pt-20">
                        {alerts.includes("case") && <CaseAlert/>}
                        {alerts.includes("cors") && <CorsAlert/>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Checker;