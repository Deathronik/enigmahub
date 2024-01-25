import {Link} from "react-router-dom";

const Card = ({title, text, link, imgSrc, isAirdrop}: { title: string, text: string, link: string, imgSrc: string, isAirdrop: boolean }) => {
    return (
        <div className={`pt-5 m-2 card bg-base-200 shadow-xl flex flex-col justify-center items-center fadeIn ${isAirdrop ? "w-64" : "w-96"}`}>
            {imgSrc && <img src={imgSrc} alt={imgSrc} className="p-2 w-52 h-52"/>}
            <div className="card-body items-center text-center pt-2 pb-5">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions mt-2">
                    <Link to={link} target={isAirdrop ? "_self" : "_blank"}>
                        <button className="btn btn-primary w-40">{isAirdrop ? "CHECK" : " OPEN"}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;