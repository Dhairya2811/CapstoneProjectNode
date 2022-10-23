import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";


var  Index = ({count})=> {
    var [items, setItems] = useState([]);
    var [path, setPath] = useState("");
    var [loading, setLoading] = useState(true);
    var [count, setCount] = useState(0);
    var location = useLocation();
    
    useEffect(()=>{
        setPath(window.location.pathname);
        var pathArr = window.location.pathname.split("/");
        if(path == "/" && count == 0){
            setCount(1);
            setLoading(true);
            fetch("/index")
            .then(res => res.json())
            .then(res => {
                setItems(res);
                setLoading(false);
            });
        }
        else if(pathArr[1] == "category" && count == 0){
            setItems([]);
            setCount(1);
            setLoading(true);
            fetch("/index/category/"+pathArr[2])
            .then(res=>res.json())
            .then(res=>{
                setItems(res);
                setLoading(false);
            });
        }
    });
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