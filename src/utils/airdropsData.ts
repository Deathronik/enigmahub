import {
    fetchDeBridgeWalletData,
    fetchDriftWalletData, fetchGrassWalletData,
    fetchJupWalletData, fetchQdevWalletData,
    fetchSharkWalletData,
    fetchTnsrWalletData, fetchZircuitWalletData
} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: { [key: string]: IAirdropData } = {
    zircuit: {
        link: 'zrc',
        name: 'zrc',
        text: 'Zircuit',
        fetchWalletData: fetchZircuitWalletData,
        alerts: ['cors']
    },
    grass: {
        link: 'grass',
        name: 'grass',
        text: 'Grass',
        fetchWalletData: fetchGrassWalletData
    },
    debridge: {
        link: 'dbr',
        name: 'dbr',
        text: 'deBridge',
        fetchWalletData: fetchDeBridgeWalletData
    },
    qdev: {
        link: 'qgov',
        name: 'qgov',
        text: 'Qdev',
        fetchWalletData: fetchQdevWalletData,
        alerts: ['case', 'cors']
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

export const finishedAirdropsData: string[] = ['strkr', 'alt', 'dym', 'enjoy', 'rift', 'zeta', 'eigen', 'hlg', 'kresko']