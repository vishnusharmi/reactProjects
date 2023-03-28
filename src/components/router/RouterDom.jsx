import { Routes, Route } from "react-router-dom"
import Cards from "../cards/Cards";
import CantactUs from "../forms/CantactUs";
import FuncBased from "../funcBased/FuncBased";
import UserInform from "../userinformation/UserInform";



function RouterDom() {
    return (
        <Routes>
            <Route path="/" element={<CantactUs />} />
            <Route path="/vishnu" element={<Cards />} /> 
            <Route path="/userinformation" element={<UserInform />} />
            <Route path="/function" element={<FuncBased/>} />
        </Routes>
    );
}
export default RouterDom;