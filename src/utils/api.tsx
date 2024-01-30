import {IWalletData} from "../interfaces/IWalletData.ts";
import {toast} from "react-toastify";
import Toast from "../components/Toast/Toast.tsx";

export const fetchAltWalletData = async (wallet: string): Promise<IWalletData> => {
    try {
        const response = await fetch("https://airdrop.altlayer.io/", {
            "headers": {
                "accept": "text/x-component",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "content-type": "text/plain;charset=UTF-8",
                "next-action": "6817e8f24aae7e8aed1d5226e9b368ab8c1ded5d",
                "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(homePage)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
            },
            "body": `["${wallet}"]`,
            "method": "POST"
        });

        const text = await response.text()
        const json = JSON.parse(text.split(('\n'))[1].split("1:")[1])

        if (json) {
            return {
                "wallet": wallet,
                "amount": Number(json.amount / 1000000000000000000),
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
        if (String(e).includes('Failed to fetch')) {
            console.error(e)
            toast(<Toast text="CORS error. Please use the extension to bypass"/>);
            await new Promise(r => setTimeout(r, 60000));
            return await fetchAltWalletData(wallet);
        } else {
            console.error(e)
            toast(<Toast text="Too many requests. Start waiting 45 seconds..."/>)
            await new Promise(r => setTimeout(r, 45000))
            return await fetchAltWalletData(wallet);
        }
    }
}
export const fetchZetaWalletData = async (wallet: string): Promise<IWalletData> => {
    try {
        const response = await fetch(`https://airdrop-router.cl04.zetachain.com/pre-claim-status?address=${wallet}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
                "cache-control": "max-age=0",
                "upgrade-insecure-requests": "1"
            },
            "body": null,
            "method": "GET"
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
        console.error(e)
        toast(<Toast text="Too Many Requests. Start waiting 45 seconds..."/>)
        await new Promise(r => setTimeout(r, 45000))
        return await fetchZetaWalletData(wallet);
    }
}
export const fetchDymWalletData = async (wallet: string): Promise<IWalletData> => {
    try {
        const response = await fetch(`https://geteligibleuserrequest-xqbg2swtrq-uc.a.run.app/?address=${wallet}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk;q=0.6",
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        })

        if (response.ok) {
            const json = await response.json()

            return {
                "wallet": wallet,
                "amount": Number(json.amount.toFixed(2)),
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
        console.error(e)
        toast(<Toast text="Too Many Requests. Start waiting 45 seconds..."/>)
        await new Promise(r => setTimeout(r, 45000))
        return await fetchDymWalletData(wallet);
    }
}
export const fetchJupWalletData = async (wallet: string): Promise<IWalletData> => {
    await new Promise(r => setTimeout(r, 250))
    try {
        const response = await fetch(`https://airdrop-api.jup.ag/allocation/${wallet}`, {
            "referrer": "https://airdrop.jup.ag/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET"
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
        console.error(e)
        toast(<Toast text="Too Many Requests. Start waiting 10 seconds..."/>)
        await new Promise(r => setTimeout(r, 10000))
        return await fetchJupWalletData(wallet);
    }
}