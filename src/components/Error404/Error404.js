import React, {Component} from "react";
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
                        <a>Click here to go home</a>
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