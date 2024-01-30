export const setCheckHistory = (airdropName: string, wallets: string[]) => {
    const allHistory = JSON.parse(localStorage.getItem('history') || "{}")
    const airdropHistory = allHistory[airdropName]

    if (wallets.length > 0) {
        if (airdropHistory) {
            airdropHistory.push({
                time: Date.now(),
                wallets
            })
            allHistory[airdropName] = airdropHistory
        } else {
            allHistory[airdropName] = [{
                time: Date.now(),
                wallets
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