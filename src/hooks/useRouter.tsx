import {Navigate, Route, Routes} from "react-router-dom";
import Links from "../components/Links/Links.tsx";
import Home from "../components/Home/Home.tsx";
import Checker from "../components/Checker/Checker.tsx";
import {fetchEnjoyWalletData, fetchJupWalletData, fetchZetaWalletData} from "../utils/api.tsx";
import AirdropFinished from "../components/AirdropFinished/AirdropFinished.tsx";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/links" element={<Links/>}/>
            <Route path="/check/enjoy" element={<Checker airdropName={"enjoy"} fetchWalletData={fetchEnjoyWalletData}/>}/>
            <Route path="/check/zeta" element={<Checker airdropName={"zeta"} fetchWalletData={fetchZetaWalletData}/>}/>
            <Route path="/check/jup" element={<Checker airdropName={"jup"} fetchWalletData={fetchJupWalletData}/>}/>
            <Route path="/check/alt" element={<AirdropFinished stage={"airdrop"}/>}/>
            <Route path="/check/dym" element={<AirdropFinished stage={"airdrop"}/>}/>
            <Route path="/check/strkr" element={<AirdropFinished stage={"airdrop"}/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}