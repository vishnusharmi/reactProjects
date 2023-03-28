
import React from "react";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import './Header.css';

class Header extends React.Component{
    render() {
        return (
            <div style={{display:"flex"}}>
            <div style={{flex:2,backgroundColor:"pink"}}>
                <Logo />
            </div>
            <div className="head">
                    <Nav/>
            </div>
            </div>
            
        );
    }
}
export default Header;


