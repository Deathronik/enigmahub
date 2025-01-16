import {
    fetchDeBridgeWalletData, fetchDeriveWalletData,
    fetchDriftWalletData, fetchGrassWalletData,
    fetchJupWalletData,
    fetchSharkWalletData,
    fetchTnsrWalletData, fetchZircuitWalletData
} from "./api.tsx";
import {IAirdropData} from "../interfaces/IAirdropData.ts";

export const airdropsData: { [key: string]: IAirdropData } = {
    derive: {
        link: "drv",
        name: "drv",
        text: "derive",
        fetchWalletData: fetchDeriveWalletData
    },
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
        fetchWalletData: fetchGrassWalletData,
        alerts: ['cors']
    },
    debridge: {
        link: 'dbr',
        name: 'dbr',
        text: 'deBridge',
        fetchWalletData: fetchDeBridgeWalletData
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

const airdropFinishedText = 'If you see this page, it means that the airdrop is complete'

export const finishedAirdropsData: { [key: string]: { text: string } } = {
    strkr: {text: airdropFinishedText},
    alt: {text: airdropFinishedText},
    dym: {text: airdropFinishedText},
    enjoy: {text: airdropFinishedText},
    rift: {text: airdropFinishedText},
    zeta: {text: airdropFinishedText},
    eigen: {text: airdropFinishedText},
    hlg: {text: airdropFinishedText},
    kresko: {text: airdropFinishedText},
    qgov: {text: airdropFinishedText},
    pengu: {text: "If you see this page, it means that the project has closed API for checks, so you need to use the official checker"}
}