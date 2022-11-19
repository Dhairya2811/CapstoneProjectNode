import React from "react";
import { useNavigate } from "react-router-dom";


var ItemDisplay = ({item}) => {
    var navigate = useNavigate();
    var heiwid = "20em";

    const clickFunction = ()=> {
        navigate(`/details/${item.rowid}`);
    };

    return(
        <div className="itemDisplayDiv" onClick={clickFunction} >
            <div className="displayItemOuter">
                <div style={{background: `transparent url(${item.image}) no-repeat center`, borderRadius: "10px 10px 0 0", backgroundSize: 'contain', width: heiwid, height: heiwid}}></div>
            </div>
            <div className="titlePriceDiv">
                <h3>{item.title}</h3>
                <span className="price">$ {item.price}</span>
            </div>
        </div>
    );
}

export default ItemDisplay;