import {Navigate, Route, Routes} from "react-router-dom";
import Links from "../components/Links/Links.tsx";
import JupiterChecker from "../components/Checkers/JupiterChecker/JupiterChecker.tsx";
import ZetaChecker from "../components/Checkers/ZetaChecker/ZetaChecker.tsx";
import DymensionChecker from "../components/Checkers/DymensionChecker/DymensionChecker.tsx";
import AirdropFinished from "../components/Checkers/AirdropFinished/AirdropFinished.tsx";
import Home from "../components/Home/Home.tsx";
import AltLayerChecker from "../components/Checkers/AltLayerChecker/AltLayerChecker.tsx";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/links" element={<Links/>}/>
            <Route path="/check/alt" element={<AltLayerChecker/>}/>
            <Route path="/check/zeta" element={<ZetaChecker/>}/>
            <Route path="/check/dym" element={<DymensionChecker/>}/>
            <Route path="/check/jup" element={<JupiterChecker/>}/>
            <Route path="/check/strkr" element={<AirdropFinished/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}