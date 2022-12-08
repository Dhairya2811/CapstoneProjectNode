import React from "react";
import { useNavigate } from "react-router-dom";


var ItemDisplay = ({item}) => {
    var navigate = useNavigate();
    var heiwid = "185px";

    const clickFunction = ()=> {
        navigate(`/details/${item.rowid}`);
    };

    return(
        <div className="itemDisplayDiv" onClick={clickFunction} >
            <div className="displayItemOuter">
                <div style={{background: `transparent url(${item.image}) no-repeat center`, borderRadius: "10px 10px 0 0", backgroundSize: 'contain', width: heiwid, height: heiwid}}></div>
            </div>
            <div className="titlePriceDiv">
                {item.deal == 1 && item.deal_title != undefined? 
                    <div className="itemDealsText">
                        {item.deal_title}
                    </div>
                :
                    <></>
                }
                <div className="itemtitleText">{item.title}</div>
                <span className="price">$ {item.price}</span>
            </div>
        </div>
    );
}

export default ItemDisplay;