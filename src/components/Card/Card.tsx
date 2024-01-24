const Card = ({title, text, link, imgSrc}: { title: string, text: string, link: string, imgSrc: string }) => {
    return (
        <div className="pt-5 m-2 card w-96 bg-base-200 shadow-xl flex flex-col justify-center items-center fadeIn">
            <img src={imgSrc} alt={imgSrc} className="p-2 w-52 h-52"/>
            <div className="card-body items-center text-center pt-2 pb-5">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions mt-2">
                    <a href={link} target="_blank">
                        <button className="btn btn-primary w-40">OPEN</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;