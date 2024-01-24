import {Navigate, Route, Routes} from "react-router-dom";
import Links from "../components/Links/Links.tsx";
import JupiterChecker from "../components/Checkers/JupiterChecker/JupiterChecker.tsx";
import ZetaChecker from "../components/Checkers/ZetaChecker/ZetaChecker.tsx";
import DymensionChecker from "../components/Checkers/DymensionChecker/DymensionChecker.tsx";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div/>}/>
            <Route path="/links" element={<Links/>}/>
            <Route path="/check/zeta" element={<ZetaChecker/>}/>
            <Route path="/check/dym" element={<DymensionChecker/>}/>
            <Route path="/check/jup" element={<JupiterChecker/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}