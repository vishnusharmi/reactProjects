import React from "react";
import BodyFlex from "./BodyFlex1/BodyFlex";
import BodyFlex2 from "./BodyFlex2/BodyFlex2";
import BodyFlex3 from "./BodyFlex3/BodyFlex3";
import Content from "./content/Content";


// const inTernal = {
//     display: "flex",
//     height: "100px",
//}

class BodyParent extends React.Component{
    render() {
        return (
            <div style={{display:"flex"}}>
                {/* <div style={{flex:1}}>
                    <BodyFlex/>
                </div>
                <div style={{flex:2}}>
                    <BodyFlex2/>
                </div>
                <div style={{flex:1}}>
                    <BodyFlex3/>
                </div> */}


                <Content data={{ value: "content-1", bg: "red" }} />
                <Content data={{ value: "content-2", bg: "green" }} />
                <Content data={{ value: "content-3", bg: "yellow" }} />
                
            </div>
            
        )
    }
}
export default BodyParent;