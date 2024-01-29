import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Drawer from "./components/Drawer/Drawer.tsx";

import {useRoutes} from "./hooks/useRouter.tsx";
import {BrowserView, MobileView} from 'react-device-detect';
import {ToastContainer} from "react-toastify";

const App = () => {
    const routes = useRoutes()

    return (
        <div className="p-2 flex flex-row fadeIn">
            <MobileView>
                <ToastContainer autoClose={7500} position="top-center" hideProgressBar={true} closeButton={false}/>
                <Drawer/>
            </MobileView>
            <BrowserView>
                <ToastContainer autoClose={7500} position="bottom-right" hideProgressBar={true} closeButton={false}/>
                <Sidebar/>
            </BrowserView>
            <div className="flex-grow flex justify-center items-center ml-5 p-2">
                {routes}
            </div>
        </div>
    )
}

export default App
