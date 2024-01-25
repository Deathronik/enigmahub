import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";

import {useRoutes} from "./hooks/useRouter.tsx";

const App = () => {
    const routes = useRoutes()

    return (
        <div className="p-2 flex flex-row fadeIn">
            <Sidebar/>
            <div className="flex-grow flex justify-center items-center">
                {routes}
            </div>
        </div>
    )
}

export default App
