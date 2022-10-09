import { useState } from "react";
import Error404 from "../Error404/Error404";

var Payment = ()=>{
    const [items, setItems] = useState([]);
    if(sessionStorage.getItem("items")!= null){
        setItems(sessionStorage.getItem("items"));
        sessionStorage.removeItem("items");
    }

    var returnComponent = ()=>{
        if(items.length != 0){
            return (<></>);
        }else{
            return <Error404 errorMessage="Please Sign in to add item" linkAvailable = "true" />
        }
    }
    return(<>
        {returnComponent()}
    </>);
};

export default Payment;
