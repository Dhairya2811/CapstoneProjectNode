import React, {useEffect, useState} from "react";

import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";


var  MyItem = ({count})=> {
    var [items, setItems] = useState([]);
    var [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        var pathArr = window.location.pathname.split("/");
        var username = sessionStorage.getItem("username");
        if(pathArr[1] == "myItems" && pathArr[2] == undefined && loading == true){
            setLoading(true);
            fetch("/getMyItems/"+username)
            .then(res => res.json())
            .then(res => {
                setItems(res);
                setLoading(false);
            });
        }else if(loading == true && pathArr[1] == "myItems" && pathArr[2] == "category"){
            setLoading(true);
            fetch("/getMyItems/"+username+"/category/"+pathArr[3])
            .then(res => res.json())
            .then(res => {
                setItems(res);
                setLoading(false);
            });
        }
    });
    return(
        <div className="displayMyItemsPage">
            <div className="displayItems">
                {loading == false ? (items).map((item, index)=>{
                    return <ItemDisplay item = {item} key={index} />
                }) : <LoadingSpinner /> }
            </div>
            
        </div>
    );
}

export default MyItem;