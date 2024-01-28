import Sidebar from "../Sidebar/Sidebar.tsx";

const Drawer = () => {
    return (
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
            <div className="drawer-side z-[2] h-full">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="p-2 m-2">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default Drawer;