import Card from "../Card/Card.tsx";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl">You can check now</h1>
            <div className="flex flex-row mt-3">
                    <Card title={"$ALT Airdrop"} text={"AltLayer"} imgSrc={"/assets/imgs/airdrop2.png"} link={"/check/alt"} isAirdrop={true}/>
                <Card title={"$ZETA Airdrop"} text={"Zetachain"} imgSrc={"/assets/imgs/airdrop2.png"} link={"/check/zeta"} isAirdrop={true}/>
                <Card title={"$DYM Airdrop"} text={"Dymension"} imgSrc={"/assets/imgs/airdrop2.png"} link={"/check/dym"} isAirdrop={true}/>
                <Card title={"$JUP Airdrop"} text={"Jupiter"} imgSrc={"/assets/imgs/airdrop2.png"} link={"/check/jup"} isAirdrop={true}/>
            </div>
        </div>
    )
}

export default Home;