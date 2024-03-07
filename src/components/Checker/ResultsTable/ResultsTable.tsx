import {IWalletData} from "../../../interfaces/IWalletData.ts";

const ResultsTable = ({results, tokenName}: {results: IWalletData[], tokenName: string}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-3 fadeIn">
            <div className="font-bold mt-1 text-2xl">Total: {results.reduce((total: number, currentValue) => total + currentValue.amount, 0)} ${tokenName}</div>
            <table className="table table-lg table-zebra mt-3">
                <thead className="bg-base-200">
                <tr>
                    <th>#</th>
                    <th>Wallet</th>
                    <th className="text-center">Amount</th>
                    <th>Eligible</th>
                </tr>
                </thead>
                <tbody>
                {results.map((result, index) =>
                    <tr key={index} className="hover">
                        <th>{index + 1}</th>
                        <td>{result.wallet}</td>
                        <td className="text-center">{result.amount}</td>
                        <td className="text-center">{result.eligible ? "✔️" : "❌"}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable;