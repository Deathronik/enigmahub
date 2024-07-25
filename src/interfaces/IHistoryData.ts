import {IWalletData} from "./IWalletData.ts";

export interface IHistoryData {
    time: Date,
    checkResult: IWalletData[]
}