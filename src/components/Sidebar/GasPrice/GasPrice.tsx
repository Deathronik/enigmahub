import {useEffect, useState} from "react";

const GasPrice = () => {
    const [gasPrice, setGasPrice] = useState(0)

    useEffect(() => {
        const fetchGasPrice = async () => {
            const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=Y63A2Q51IX6SR3AP4MYGV1IPZ6IJI2TRBA')
            const responseJSON = await response.json()

            setGasPrice(responseJSON.result.ProposeGasPrice)
        }

        fetchGasPrice().catch(console.error)

        const intervalId = setInterval(() => {
            fetchGasPrice().catch(console.error)
        }, 60 * 1000)

        return () => clearInterval(intervalId);
    })

    return (
        <div className="flex flex-row items-center">
            <img src="gas.png" width="15px" height="15px" alt="gas icon"/>
            <b className="ml-1">{gasPrice} GWEI</b>
        </div>
    )
}

export default GasPrice;