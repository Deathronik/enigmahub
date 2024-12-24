import {Navigate, Route, Routes} from "react-router-dom";
import Links from "../components/Links/Links.tsx";
import Home from "../components/Home/Home.tsx";
import Checker from "../components/Checker/Checker.tsx";
import CheckFinished from "../components/CheckFinished/CheckFinished.tsx";
import {airdropsData, finishedAirdropsData} from "../utils/airdropsData.ts";
import AddressesNormalizer from "../components/AddressesNormalizer/AddressesNormalizer.tsx";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tools/normalizer" element={<AddressesNormalizer/>}/>
            <Route path="/links" element={<Links/>}/>
            {Object.keys(airdropsData).map((key) => {
                const airdrop = airdropsData[key]
                return <Route key={airdrop.name} path={`/check/${airdrop.link}`}
                              element={<Checker airdropName={airdrop.name}
                                                fetchWalletData={airdrop.fetchWalletData}
                                                alerts={airdrop.alerts ? airdrop.alerts : undefined}/>}/>
            })}
            {Object.keys(finishedAirdropsData).map(key => {
                const text = finishedAirdropsData[key].text
                return <Route key={key} path={`/check/${key}`} element={<CheckFinished text={text}/>}/>
            })}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}