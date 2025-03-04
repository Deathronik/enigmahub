import {Link} from "react-router-dom";

const CorsAlert = () => {
    return (
        <div role="alert" className="alert alert-error w-96 fadeIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                 viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
                <p>The project has CORS protection. To make the checker work, you need to download this browser <Link
                    to="https://chromewebstore.google.com/detail/moesif-origincors-changer/digfbfaphojjndkpccljibejjbppifbc"
                    target="_blank" className="link link-neutral font-bold">extension</Link></p>
                <p className="mt-2">Open it by clicking the left mouse button, then activate the "Enable CORS"
                    option</p>
                <p className="mt-2">For your safety, it is recommended to use this extension only while working with the
                    checker. After that, disable it here "chrome://extensions/"</p>
                <p className="mt-2">*Next time, when using the checker, don't forget to enable the extension if the airdrop site has CORS protection</p>
            </div>
        </div>
    )
}

export default CorsAlert;