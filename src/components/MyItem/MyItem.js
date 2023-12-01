import React, {useEffect, useState} from "react";

import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";
import Error404 from "../Error404/Error404";


var  MyItem = ({count})=> {
    var [items, setItems] = useState([]);
    var [loading, setLoading] = useState(true);
    const [username, setUserName] = useState(null);
    const [blocked, setBlocked] = useState(null);
    
    useEffect(()=>{
        var pathArr = window.location.pathname.split("/");
        var user = JSON.parse(sessionStorage.getItem("user"));
        setUserName(user == null ? null : user.username);
        setBlocked(user == null ? null : user.blocked);
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
    var returnContent = () => {
        if(blocked == 1){
            return <Error404 errorMessage="Your account has been blocked by an admin." linkAvailable="true"/>;
        }
        if(items.length != 0){
            return (<div className="displayMyItemsPage">
                <div className="displayItems">
                    {loading == false ? (items).map((item, index)=>{
                        return <ItemDisplay item = {item} key={index} />
                    }) : <LoadingSpinner /> }
                </div>
            </div>);
        }else{
            return <h2 style={{padding: "1em 10%"}}>No item has been added.</h2>
        }
    };

    return(<>
        {returnContent()}
    </>);
}

export default MyItem;