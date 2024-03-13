import {fetchEnjoyWalletData, fetchJupWalletData, fetchZetaWalletData} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: {[key: string]: IAirdropData} = {
    enjoy: {
        name: 'enjoy',
        text: 'Enjoy',
        fetchWalletData: fetchEnjoyWalletData
    },
    zeta: {
        name: 'zeta',
        text: 'Zeta',
        fetchWalletData: fetchZetaWalletData
    },
    jup: {
        name: 'jup',
        text: 'Jupiter',
        fetchWalletData: fetchJupWalletData
    }
}

export const finishedAirdropsData: string[] = ['strkr', 'alt', 'dym']