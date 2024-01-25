import {useEffect, useState} from "react";

const EthPrice = () => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const fetchPrice = async () => {
            const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
            const responseJSON = await response.json()

            setPrice(responseJSON.USD)
        }

        fetchPrice().catch(console.error)

        const intervalId = setInterval(() => {
            fetchPrice().catch(console.error)
        }, 60 * 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="flex flex-row items-center">
            <img src="/assets/imgs/eth.png" width="25px" height="25px" alt="ETH logo"/>
            <div>
                <b>{Math.round(price)} $</b>
            </div>
        </div>
    )
}

export default EthPrice;