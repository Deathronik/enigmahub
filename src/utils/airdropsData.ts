import {fetchJupWalletData, fetchSharkWalletData, fetchTnsrWalletData, fetchZetaWalletData} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: {[key: string]: IAirdropData} = {
    shark: {
        name: 'shark',
        text: 'SharkyFi',
        fetchWalletData: fetchSharkWalletData
    },
    tnsr: {
        name: 'tnsr',
        text: 'Tensor',
        fetchWalletData: fetchTnsrWalletData
    },
    zeta: {
        name: 'zeta',
        text: 'ZetaChain',
        fetchWalletData: fetchZetaWalletData
    },
    jup: {
        name: 'jup',
        text: 'Jupiter',
        fetchWalletData: fetchJupWalletData
    }
}

export const finishedAirdropsData: string[] = ['strkr', 'alt', 'dym', 'enjoy', 'rift']