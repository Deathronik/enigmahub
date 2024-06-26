import {IWalletData} from "../interfaces/IWalletData.ts";
import {toast} from "react-toastify";
import Toast from "../components/Toast/Toast.tsx";

const sleep = (time: number) => new Promise(r => setTimeout(r, time))
export const fetchKreditsWalletData = async (wallet: string, signal: AbortSignal): Promise<IWalletData | undefined> => {
    try {
        const response = await fetch("https://check.kresko.link/", {
            "headers": {
                "accept": "text/x-component",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "no-cache",
                "content-type": "text/plain;charset=UTF-8",
                "next-action": "5aaed2a280e7b9ca6142950ffd5747c025a3de1b",
                "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
                "pragma": "no-cache",
                "priority": "u=1, i"
            },
            "body": `["${wallet.toLowerCase()}"]`,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        })

        const text = await response.text()
        const json = JSON.parse(text.split(('\n'))[1].split("1:")[1])[0]

        if (json) {
            return {
                "wallet": wallet,
                "amount": json.points,
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
            return await fetchKreditsWalletData(wallet, signal);
        } else {
            console.error(e)
            toast(<Toast text="Too Many Requests. Start waiting 60 seconds..."/>)
            await sleep(60000)
            return await fetchKreditsWalletData(wallet, signal);
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
        return Number.parseInt(json.result.ProposeGasPrice)
    } catch (e) {
        console.error(e)
        await sleep(5000)
        return fetchGasPrice()
    }
}