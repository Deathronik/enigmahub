import {
    fetchDriftWalletData,
    fetchJupWalletData, fetchKreditsWalletData,
    fetchSharkWalletData,
    fetchTnsrWalletData
} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: { [key: string]: IAirdropData } = {
    kredits: {
        link: 'kresko',
        name: 'kredits',
        text: 'Kresko',
        alerts: ['cors'],
        fetchWalletData: fetchKreditsWalletData
    },
    drift: {
        link: 'drift',
        name: 'drift',
        text: 'DriftProtocol',
        fetchWalletData: fetchDriftWalletData
    },
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
    jup: {
        link: 'jup',
        name: 'jup',
        text: 'Jupiter',
        fetchWalletData: fetchJupWalletData
    }
}

export const finishedAirdropsData: string[] = ['strkr', 'alt', 'dym', 'enjoy', 'rift', 'zeta', 'eigen']