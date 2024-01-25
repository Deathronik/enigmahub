import {Link} from "react-router-dom";

const CorsAlert = () => {
    return (
        <div role="alert" className="alert alert-error w-96">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                 viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
                <p>The project has CORS protection, that the checker would work you need to download this <Link
                    to="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=ru" target="_blank" className="link link-neutral font-bold">extension</Link> for
                    browser, enable it by clicking the left button</p>
                <p className="mt-2">Then open the right mouse button menu and perform the following actions:</p>
                <p className="mt-2">Extra Options {'>'} Add/Remove "referer" and "origin" Headers {'>'} Add same-origin
                    "referer" and
                    "origin" Headers</p>
            </div>
        </div>
    )
}

export default CorsAlert;