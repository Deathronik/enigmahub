import {IWalletData} from "../interfaces/IWalletData.ts";
import {toast} from "react-toastify";
import Toast from "../components/Toast/Toast.tsx";

const sleep = (time: number) => new Promise(r => setTimeout(r, time))
export const fetchDeBridgeWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        await sleep(1100)
        const response = await fetch(`https://points-api.debridge.foundation/api/TokenDistribution/${wallet.toLowerCase()}`, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "priority": "u=1, i"
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });

        const json = await response.json()

        if (json.distributions.length > 0) {
            return {
                "wallet": wallet,
                "amount": Number((json.distributions[0].tokens / 1e6).toFixed(4)),
                "eligible": true
            }
        } else {
            return {
                "wallet": wallet,
                "amount": 0,
                "eligible": false
            }
        }
    } catch (e) {
        if (String(e).includes('signal')) {
            console.error(e)
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 60 seconds..."/>)
            await sleep(60000)
            return await fetchDeBridgeWalletData(wallet, signal);
        }
    }
}
export const fetchQdevWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        const response = await fetch(`https://airdrop-api.qdev.li/claimers/1/${wallet}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrerPolicy": "no-referrer",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        })

        const json = await response.json()

        if (json.data) {
            return {
                "wallet": wallet,
                "amount": Number((json.data.rewards.airdrop / 1e18).toFixed(4)),
                "eligible": true
            }
        } else {
            return {
                "wallet": wallet,
                "amount": 0,
                "eligible": false
            }
        }
    } catch (e) {
        if (String(e).includes('signal')) {
            console.error(e)
        } else if (String(e).includes('Failed to fetch')) {
            console.error(e)
            toast(<Toast text="CORS error. Please use the extension to bypass"/>);
            await sleep(60000)
            return await fetchQdevWalletData(wallet, signal);
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 60 seconds..."/>)
            await sleep(60000)
            return await fetchQdevWalletData(wallet, signal);
        }
    }
}
export const fetchDriftWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        await sleep(1000)
        const response = await fetch(`https://airdrop.drift.trade/eligibility/${wallet}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
            },
            "body": null,
            "method": "GET",
            signal: signal
        });

        const json = await response.json()

        if (json.end_amount) {
            return {
                "wallet": wallet,
                "amount": json.end_amount / 1e6,
                "eligible": true
            }
        } else {
            return {
                "wallet": wallet,
                "amount": 0,
                "eligible": false
            }
        }
    } catch (e) {
        if (String(e).includes('signal')) {
            console.error(e)
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 60 seconds..."/>)
            await sleep(60000)
            return await fetchDriftWalletData(wallet, signal);
        }
    }
}
export const fetchSharkWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        const response = await fetch(`https://worker.jup.ag/jup-claim-proof/SHARKSYJjqaNyxVfrpnBN9pjgkhwDhatnMyicWPnr1s/${wallet}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "max-age=0",
                "if-none-match": "W/\"da39a3ee5e6b4b0d3255bfef95601890afd80709\"",
                "upgrade-insecure-requests": "1"
            },
            "body": null,
            "method": "GET",
            signal: signal
        })

        const json = await response.json().catch(() => null);

        if (json) {
            return {
                "wallet": wallet,
                "amount": json.amount / 1e6,
                "eligible": true
            }
        } else {
            return {
                "wallet": wallet,
                "amount": 0,
                "eligible": false
            }
        }
    } catch (e) {
        if (String(e).includes('signal')) {
            console.error(e)
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 60 seconds..."/>)
            await sleep(60000)
            return await fetchSharkWalletData(wallet, signal);
        }
    }
}
export const fetchTnsrWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        const response = await fetch(`https://worker.jup.ag/jup-claim-proof/TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6/${wallet}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "max-age=0",
                "if-none-match": "W/\"40c14dee6154d87f90bed5ff703021b2c857bf62\"",
                "upgrade-insecure-requests": "1"
            },
            "body": null,
            "method": "GET",
            signal: signal
        })

        const json = await response.json().catch(() => null);

        if (json) {
            return {
                "wallet": wallet,
                "amount": json.amount / 1e9,
                "eligible": true
            }
        } else {
            return {
                "wallet": wallet,
                "amount": 0,
                "eligible": false
            }
        }
    } catch (e) {
        if (String(e).includes('signal')) {
            console.error(e)
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 60 seconds..."/>)
            await sleep(60000)
            return await fetchTnsrWalletData(wallet, signal);
        }
    }
}
export const fetchJupWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    await new Promise(r => setTimeout(r, 250))
    try {
        const response = await fetch(`https://airdrop-api.jup.ag/allocation/${wallet.toLowerCase()}`, {
            "referrer": "https://airdrop.jup.ag/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            signal: signal
        })

        const json = await response.json().catch(() => null);

        if (json) {
            return ({
                wallet: wallet,
                amount: Number(json.tokens_final),
                eligible: true
            })
        } else {
            return ({
                wallet: wallet,
                amount: 0,
                eligible: false
            })
        }
    } catch (e) {
        if (String(e).includes('signal')) {
            console.error(e)
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 45 seconds..."/>)
            await sleep(45000)
            return await fetchJupWalletData(wallet, signal);
        }
    }
}

export const fetchEthPrice = async (): Promise<number> => {
    try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
        const json = await response.json()
        return json.USD
    } catch (e) {
        console.error(e)
        await sleep(5000)
        return fetchEthPrice()
    }
}

export const fetchGasPrice = async (): Promise<number> => {
    try {
        const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=Y63A2Q51IX6SR3AP4MYGV1IPZ6IJI2TRBA')
        const json = await response.json()
        const gasPrice = json.result.ProposeGasPrice

        if (gasPrice < 10) {
            return Number(Number(gasPrice).toFixed(1))
        } else {
            return Number.parseInt(gasPrice)
        }
    } catch (e) {
        console.error(e)
        await sleep(5000)
        return fetchGasPrice()
    }
}