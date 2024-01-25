import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";

import {useRoutes} from "./hooks/useRouter.tsx";
import {useEffect, useState} from "react";

const App = () => {
    const routes = useRoutes()
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

    useEffect(() => {
        setIsMobile(window.innerWidth <= 767)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <div className="p-2 flex flex-row fadeIn">
            {isMobile && <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="drawer-side z-[2]">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Sidebar/>
                </div>
            </div>}
            {!isMobile && (<Sidebar/>)}
            <div className="flex-grow flex justify-center items-center">
                {routes}
            </div>
        </div>
    )
}

export default App
