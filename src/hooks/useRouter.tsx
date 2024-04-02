import {Navigate, Route, Routes} from "react-router-dom";
import Links from "../components/Links/Links.tsx";
import Home from "../components/Home/Home.tsx";
import Checker from "../components/Checker/Checker.tsx";
import AirdropFinished from "../components/AirdropFinished/AirdropFinished.tsx";
import {airdropsData, finishedAirdropsData} from "../utils/airdropsData.ts";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/links" element={<Links/>}/>
            {Object.keys(airdropsData).map((key) => {
                const airdrop = airdropsData[key]
                return <Route key={airdrop.name} path={`/check/${airdrop.name}`}
                              element={<Checker airdropName={airdrop.name}
                                                fetchWalletData={airdrop.fetchWalletData}
                                                alerts={airdrop.alerts ? airdrop.alerts : undefined}/>}/>
            })}
            {finishedAirdropsData.map(airdrop => {
                return <Route key={airdrop} path={`/check/${airdrop}`} element={<AirdropFinished stage={'airdrop'}/>}/>
            })}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}