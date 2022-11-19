import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";


var  Index = ()=> {
    var [items, setItems] = useState([]);
    var [loading, setLoading] = useState(true);
    var location = useLocation();
    
    useEffect(()=>{
        var pathArr = location.pathname.split("/");
        if(location.pathname == "/"){
            setLoading(true);
            fetch("/index")
            .then(res => res.json())
            .then(res => {
                setItems(res);
                setLoading(false);
            });
        }
        else if(pathArr[1] == "category"){
            setItems([]);
            setLoading(true);
            fetch("/index/category/"+pathArr[2])
            .then(res=>res.json())
            .then(res=>{
                setItems(res);
                setLoading(false);
            });
        }else if(pathArr[1] == "search"){
            setItems([]);
            setLoading(true);
            fetch("/index/search/"+pathArr[2])
            .then(res=>res.json())
            .then(res=>{
                setItems(res);
                setLoading(false);
            });
        }
    }, [location]);
    return(
        <div>
            <div className="displayitems">
                {loading == false ? (items).map((item, index)=>{
                    return <ItemDisplay item = {item} key={index} />
                }) : <LoadingSpinner /> }
            </div>
            
        </div>
    );
}

export default Index;