import EthPrice from "./EthPrice/EthPrice.tsx";
import GasPrice from "./GasPrice/GasPrice.tsx";
import {Link, NavLink} from "react-router-dom";
const Sidebar = () => {
    return (
        <ul className="menu bg-base-200 menu-lg w-56 rounded-box fadeIn" style={{maxHeight: 546}}>
            <Link to="/">
                <li className="text-gray-50">
                    <div>
                        <img src="/assets/imgs/logo.png" alt="logo" className="filter brightness-90"/>
                        <b>Enigma Hub</b>
                    </div>
                </li>
            </Link>
            <div className="divider mt-1 mb-1"/>
            <li>
                <NavLink to="/" className="pl-5">
                    <img src="/assets/imgs/home.png" alt="home" className="filter brightness-90 w-8 h-8"/>
                    Home
                </NavLink>
            </li>
            <li className="dropdown dropdown-right mt-1">
                <a tabIndex={0} role="button" className="pl-5">
                    <img src="/assets/imgs/find.png" alt="find" className="w-9 h-9"/>
                    <div>Checkers</div>
                </a>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200/50 rounded-box w-32">
                    <li><NavLink to="/check/alt">$ALT</NavLink></li>
                    <li className="mt-1"><NavLink to="/check/zeta">$ZETA</NavLink></li>
                    <li className="mt-1"><NavLink to="/check/dym">$DYM</NavLink></li>
                    <li className="mt-1"><NavLink to="/check/jup">$JUP</NavLink></li>
                </ul>
            </li>
            <li className="disabled">
            <a>
                    <img src="/assets/imgs/fire.png" alt="fire"
                         className="filter brightness-75 w-8 h-13 animate-pulse"/>
                    L0 Gas Refuel (Coming Soon)
                </a>
            </li>
            <li className="disabled">
                <a>
                    <img src="/assets/imgs/robot.png" alt="softs" className="filter brightness-75 w-8 h-8"/>
                    Enigma Soft (Coming Soon)
                </a>
            </li>
            <li className="mt-1">
                <NavLink to="/links">
                    <img src="/assets/imgs/links.png" alt="links" className="filter brightness-75 w-8 h-8"/>
                    Our links
                </NavLink>
            </li>
            <div className="divider mt-1"/>
            <div className="flex flex-row justify-center items-center mb-3">
                <EthPrice/>
                <div className="divider divider-horizontal ml-1 mr-1"/>
                <GasPrice/>
            </div>
        </ul>
    )
}

export default Sidebar;