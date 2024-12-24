import {Link} from "react-router-dom";

const CheckFinished = ({text}: {text: string}) => {
    return (
        <div className="flex flex-col justify-center items-center font-bold text-center mt-12">
            <h1 className="text-2xl">{text}</h1>
            <img src="/assets/imgs/airdrop.png" alt="airdrop" className="mt-4 mb-4 rounded-box w-2/5"/>
            <p>You can check any of the other available airdrops</p>
            <Link to="/">
                <button className="btn btn-primary mt-4">GO TO HOME</button>
            </Link>
        </div>
    )
}

export default CheckFinished;