import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";


var ItemDisplay = ({item}) => {
    var navigate = useNavigate();

    const clickFunction = ()=> {
        console.log("clicked item");
        navigate(`/details/${item.rowid}`);
    };
    return(
        <div className="itemDisplayDiv" style={{zIndex: "1"}} onClick={clickFunction} >
            <img src={item.image} className="displayItemImg" style={{width: "20em", maxWidth: "20em", borderRadius: "10px 10px 0px 0px"}}/>
            <div className="titlePriceDiv">
                <h3>{item.title}</h3>
                <span className="price">$ {item.price}</span>
            </div>
        </div>
    );
}

export default ItemDisplay;