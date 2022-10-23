import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error404 from "../Error404/Error404";
import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";

var MyCart = ()=>{
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState("true");
    var navigate = useNavigate();

    useEffect(()=>{
        var pathArr = window.location.pathname.split("/");
        if(loading == "true" && pathArr[1] == "myCart" && pathArr[2] == undefined){
            fetch(`/getCartItems/${sessionStorage.getItem("username")}`)
            .then(res => res.json())
            .then(res =>{
                setItems(res);
                setLoading("false");
            });
        }else if(loading == "true" && pathArr[1] == "myCart" && pathArr[2] == "category"){
            fetch(`/getCartItems/${sessionStorage.getItem("username")}/category/${pathArr[3]}`)
            .then(res => res.json())
            .then(res =>{
                setItems(res);
                setLoading("false");
            });
        }
    });
    var renderItems = ()=>{
        if(items.length === 0){
            if(loading === "false"){
                return (<h2>The cart is empty</h2>);  
            }          
        }else{
            return (<>       
                <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}} >
                        <button className="btn btn-success" onClick={()=>{checkout()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16" style={{marginRight: "6px", marginTop: "-5px"}}>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                            Checkout</button>
                        </div>     
                {items.map((item, index)=>{
                    return <>
                        {console.log(item)}
                        <ItemDisplay item = {item} key={index} />
                    </>
                })}
            </>);
        }
    }
    var renderComponent = ()=>{
        if(sessionStorage.getItem("username") === null){
            return <Error404 errorMessage="You are not signed in." linkAvailable="true"/>
        }
            return (<>
                {loading == "true" ? <LoadingSpinner /> : <>{renderItems()}</>}
            </>);
    }

    var checkout = ()=>{
        sessionStorage.setItem("items", JSON.stringify(items));
        navigate("/payment");
    }

    return(<>
        <div className="displayitems">
        {renderComponent()}
    </div></>);
}

export default MyCart; 