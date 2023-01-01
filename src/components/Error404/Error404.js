import React, {Component} from "react";
import { Link } from "react-router-dom";
import {glasses2Image, bagImage, watchImg} from "./images.json";

var Error404 = ({ linkAvailable, errorMessage }) => {
    var linkDiv = ()=>{
        if(linkAvailable == "true"){
            return(<>
                <div>{errorMessage}</div>
            </>)
        }
    }
    return(
        <>
            <div className="page404">
                <div className="div404">
                    <div className="forAnimation">
                        <h1 className="h1404">404</h1>
                        <p className="messageP">{linkDiv()}</p>
                        <h5>Page not found!!!</h5>
                        <Link to={"/"} style={{zIndex: "5", color:"#003A56"}} className="link_to_go_home">Click here to go home</Link>
                    </div>
                </div>
                
                <div className="images">
                    <img src={glasses2Image} className="glassImage" />
                    <img src={watchImg} className="watchImg"/>
                    <img src={bagImage} className="bagImage"/>
                </div>
            </div>
        </>
    );
}

export default Error404;