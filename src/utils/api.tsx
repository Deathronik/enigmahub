import {IWalletData} from "../interfaces/IWalletData.ts";
import {toast} from "react-toastify";
import Toast from "../components/Toast/Toast.tsx";

const sleep = (time: number) => new Promise(r => setTimeout(r, time))
export const fetchRiftWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        const response = await fetch(`https://api-riftswap.online/api/Airdrop/CheckAddress?address=${wallet}`, {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
            },
            "body": null,
            "method": "GET"
        })

        const json = await response.json()

        if (Number(json.result.tokenAmountString) > 0) {
            return {
                "wallet": wallet,
                "amount": Number(json.result.tokenAmountString) / 1e18,
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
            return await fetchRiftWalletData(wallet, signal);
        }
    }
}
export const fetchZetaWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        const response = await fetch(`https://airdrop-router.cl04.zetachain.com/pre-claim-status?address=${wallet}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "max-age=0",
                "upgrade-insecure-requests": "1"
            },
            "body": null,
            "method": "GET",
            signal: signal
        })

        const json = await response.json()

        if (json.userCondition === "Eligible") {
            return {
                "wallet": wallet,
                "amount": Number(json.claimAmount),
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
            return await fetchZetaWalletData(wallet, signal);
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
        return  Number.parseInt(json.result.ProposeGasPrice)
    } catch (e) {
        console.error(e)
        await sleep(5000)
        return fetchGasPrice()
    }
}