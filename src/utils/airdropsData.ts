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

const airdropFinishedText = 'If you see this page, it means that the airdrop is complete'

export const finishedAirdropsData: string[] = {
    strkr: {text: airdropFinishedText},
    alt: {text: airdropFinishedText},
    dym: {text: airdropFinishedText},
    enjoy: {text: airdropFinishedText},
    rift: {text: airdropFinishedText},
    zeta: {text: airdropFinishedText},
    eigen: {text: airdropFinishedText},
    hlg: {text: airdropFinishedText},
    kresko: {text: airdropFinishedText},
    pengu: {text: "If you see this page, it means that the project close API for check, so you need to use official checker"}
}