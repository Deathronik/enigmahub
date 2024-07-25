import {IHistoryData} from "../../../interfaces/IHistoryData.ts";
import {IWalletData} from "../../../interfaces/IWalletData.ts";

const CheckHistory = ({airdropCheckHistory, setInputByClickOnHistory, setResultsByClickOnHistory, clearAirdropCheckHistory}: {
    airdropCheckHistory: IHistoryData[],
    setInputByClickOnHistory: (walletsData: IWalletData[]) => void,
    setResultsByClickOnHistory: (walletsData: IWalletData[]) => void,
    clearAirdropCheckHistory: () => void
}) => {

    return (
        <div className="flex justify-center items-center pt-14">
            {airdropCheckHistory && airdropCheckHistory.length > 0 &&
                <div className="fadeIn">
                    <div className="flex flex-row justify-center items-center">
                        <div className="text-1xl font-bold text-center mr-auto">
                            Check History:
                        </div>
                        <button className="btn btn-sm w-14 tooltip" data-tip="Stored only on your device"
                                onClick={() => clearAirdropCheckHistory()}>Clear
                        </button>
                    </div>
                    <table className="table table-sm table-zebra mt-3">
                        <thead className="bg-base-200">
                        <tr className="text-center">
                            <th>Time</th>
                            <th>Wallets</th>
                        </tr>
                        </thead>
                        <tbody>
                        {airdropCheckHistory.map((data: IHistoryData, index) =>
                            data.checkResult && (
                                <tr key={index} className="hover cursor-pointer"
                                    onClick={() => {
                                        setInputByClickOnHistory(data.checkResult)
                                        setResultsByClickOnHistory(data.checkResult)
                                    }}>
                                    <td>{new Date(data.time).toLocaleDateString()} {new Date(data.time).toLocaleTimeString()}</td>
                                    <td className="max-w-96 overflow-hidden text-ellipsis">{data.checkResult.map(walletData => walletData.wallet).join(", ")}</td>
                                </tr>)
                        )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default CheckHistory;