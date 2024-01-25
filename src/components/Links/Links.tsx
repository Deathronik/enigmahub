import Card from "../Card/Card.tsx";

const Links = () => {
    return (
        <div className="flex flex-row p-5">
            <Card title={"Enigma Hub Channel"}
                  text={"Our Telegram channel with all news and updates"}
                  link={"https://t.me/enigma_hub_official"}
                  imgSrc={"/src/assets/imgs/telegram.png"}
                  isAirdrop={false}/>
            <Card title={"Enigma Hub Developer GitHub"}
                  text={"Git Hub of the main developer in Enigma Hub"}
                  link={"https://github.com/Deathronik"}
                  imgSrc={"/src/assets/imgs/github.png"}
                  isAirdrop={false}/>
            <Card title={"Enigma Hub Founder Contact"}
                  text={"You can write here with business proposals or just if you need direct contact"}
                  link={"https://t.me/Deathronik"}
                  imgSrc={"/src/assets/imgs/telegram.png"}
                  isAirdrop={false}/>
            <Card title={"Enigma Hub Chat"}
                  text={"Our Telegram chat where you can chat with other users, as well as report bugs or suggestions"}
                  link={"https://t.me/+etdOYRdxXww0NmMy"}
                  imgSrc={"/src/assets/imgs/telegram.png"}
                  isAirdrop={false}/>
        </div>
    );
};

export default Links;