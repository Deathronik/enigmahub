import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import Sidebar from "./components/Sidebar/Sidebar.tsx";

import {useRoutes} from "./hooks/useRouter.tsx";
import {BrowserView, MobileView} from 'react-device-detect';
import {ToastContainer} from "react-toastify";

const App = () => {
    const routes = useRoutes()

    return (
        <div className="p-2 flex flex-row fadeIn">
            <MobileView>
                <div className="drawer">
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
                        <div className="p-2">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <Sidebar/>
            </BrowserView>
            <div className="flex-grow flex justify-center items-center ml-5">
                {routes}
            </div>
            <ToastContainer autoClose={7500} position="bottom-right" hideProgressBar={true} closeButton={false}/>
        </div>
    )
}

export default App
