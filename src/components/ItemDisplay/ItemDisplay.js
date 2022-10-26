import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";


var ItemDisplay = ({item}) => {
    var navigate = useNavigate();

    const clickFunction = ()=> {
        navigate(`/details/${item.rowid}`);
    };

    var cropImage = (imgPath)=>{
        const originalImage = new Image();
        originalImage.src = imgPath;
        const canvas = document.getElementsByClassName('displayImageCanvas');
        const ctx = canvas.getContext('2d');
        originalImage.addEventListener("load", ()=>{
            canvas.width = "200px";
            canvas.height = "200px";
            ctx.drawImage(originalImage, 0, 0, 200, 200, 0, 0, 200, 200);
        });
    };

    return(
        <div className="itemDisplayDiv" onClick={clickFunction} >
            <div className="displayItemOuter">
                <img src={item.image} className="displayItemImg" />
            </div>
            <div className="titlePriceDiv">
                <h3>{item.title}</h3>
                <span className="price">$ {item.price}</span>
            </div>
        </div>
    );
}

export default ItemDisplay;