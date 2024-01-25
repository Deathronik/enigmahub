import {Link} from "react-router-dom";

const Creator = () => {
    return (
        <div className="flex flex-col justify-center items-center font-bold mt-3">
            <div>
                Made with ❤️ by Enigma Hub
            </div>
            <div className="mt-1">
                Our <Link className="link link-primary" to="https://t.me/enigma_hub_official"
                          target="_blank">Telegram</Link> and <Link className="link link-primary" to="/links">Other
                Links</Link>
            </div>
        </div>
    )
}

export default Creator;