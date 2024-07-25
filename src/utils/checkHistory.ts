import {IWalletData} from "../interfaces/IWalletData.ts";

export const setCheckHistory = (airdropName: string, walletsData: IWalletData[]) => {
    const allHistory = JSON.parse(localStorage.getItem('history') || "{}")
    const airdropHistory = allHistory[airdropName]

    if (walletsData.length > 0) {
        if (airdropHistory) {
            airdropHistory.push({
                time: Date.now(),
                checkResult: walletsData
            })
            allHistory[airdropName] = airdropHistory
        } else {
            allHistory[airdropName] = [{
                time: Date.now(),
                checkResult: walletsData
            }]
        }

        localStorage.setItem('history', JSON.stringify(allHistory))
    }
}

export const getCheckHistory = (airdropName: string) => {
    const allHistory = JSON.parse(localStorage.getItem('history') || "{}")
    return allHistory[airdropName]
}

export const clearCheckHistory = (airdropName: string) => {
    const allHistory = JSON.parse(localStorage.getItem("history") || "{}")
    allHistory[airdropName] = []
    localStorage.setItem('history', JSON.stringify(allHistory))
}

export const clearAllOldCheckHistory = () => {
    if(!JSON.parse(localStorage.getItem('allOldHistoryCleared') || "false")) {
        localStorage.removeItem('history')
        localStorage.setItem('allOldHistoryCleared', JSON.stringify(true))
    }
}