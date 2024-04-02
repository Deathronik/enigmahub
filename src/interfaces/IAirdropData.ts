import {IWalletData} from "./IWalletData.ts";

export interface IAirdropData {
    name: string,
    text: string,
    alerts?: string[],
    fetchWalletData: (wallet: string, signal: AbortSignal) => Promise<IWalletData | undefined>
}