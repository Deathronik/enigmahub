import {fetchEnjoyWalletData, fetchJupWalletData, fetchRiftWalletData, fetchZetaWalletData} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: {[key: string]: IAirdropData} = {
    rift: {
        name: 'rift',
        text: 'RiftSwap',
        alerts: ['register'],
        fetchWalletData: fetchRiftWalletData
    },
    enjoy: {
        name: 'enjoy',
        text: 'Enjoy',
        fetchWalletData: fetchEnjoyWalletData
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

export const finishedAirdropsData: string[] = ['strkr', 'alt', 'dym']