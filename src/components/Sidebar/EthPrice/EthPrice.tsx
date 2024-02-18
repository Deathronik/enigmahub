import {useEffect, useState} from "react";
import {fetchEthPrice} from "../../../utils/api.tsx";

const EthPrice = () => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        fetchEthPrice().then(price => setPrice(price))

        const intervalId = setInterval(() => {
            fetchEthPrice().then(price => setPrice(price))
        }, 60 * 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="flex flex-row items-center">
            <img src="/assets/imgs/eth.png" width="25px" height="25px" alt="ETH logo"/>
            <div className="font-bold">{Math.round(price)} $</div>
        </div>
    )
}

export default EthPrice;