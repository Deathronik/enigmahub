import {useEffect, useState} from "react";
import {fetchGasPrice} from "../../../utils/api.tsx";

const GasPrice = () => {
    const [gasPrice, setGasPrice] = useState(0)

    useEffect(() => {
        fetchGasPrice().then(price => setGasPrice(price))

        const intervalId = setInterval(() => {
            fetchGasPrice().then(price => setGasPrice(price))
        }, 60 * 1000)

        return () => clearInterval(intervalId);
    })

    return (
        <div className="flex flex-row items-center">
            <img src="/assets/imgs/gas.png" width="15px" height="15px" alt="gas icon"/>
            <div className="ml-1 font-bold">{gasPrice} GWEI</div>
        </div>
    )
}

export default GasPrice;