import {
    fetchJupWalletData,
    fetchSharkWalletData,
    fetchTnsrWalletData,
    fetchZetaWalletData
} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: {[key: string]: IAirdropData} = {
    shark: {
        link: 'shark',
        name: 'shark',
        text: 'SharkyFi',
        fetchWalletData: fetchSharkWalletData
    },
    tnsr: {
        link: 'tnsr',
        name: 'tnsr',
        text: 'Tensor',
        fetchWalletData: fetchTnsrWalletData
    },
    zeta: {
        link: 'zeta',
        name: 'zeta',
        text: 'ZetaChain',
        fetchWalletData: fetchZetaWalletData
    },
    jup: {
        link: 'jup',
        name: 'jup',
        text: 'Jupiter',
        fetchWalletData: fetchJupWalletData
    }
}

export const finishedAirdropsData: string[] = ['strkr', 'alt', 'dym', 'enjoy', 'rift']