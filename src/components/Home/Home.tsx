import Card from "../Card/Card.tsx";
import {airdropsData} from "../../utils/airdropsData.ts";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl">You can check now</h1>
            <div className="flex flex-row mt-3">
                {Object.keys(airdropsData).map((key) => {
                    const airdrop = airdropsData[key]
                    return <Card key={airdrop.name} title={`$${airdrop.name.toUpperCase()} Airdrop`} text={airdrop.text}
                                 imgSrc={"/assets/imgs/airdrop2.png"} link={`/check/${airdrop.link}`} isAirdrop={true}/>
                })}
            </div>
        </div>
    )
}

export default Home;