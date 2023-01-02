import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error404 from "../Error404/Error404";
import LoadingSpinner from "../LoadingComponent/Loading";

var DisplayPaymentItems = ({item})=>{
    var navigate = useNavigate();
    var removeClick = ()=>{
        console.log("remove click ");
        let username = (sessionStorage.getItem("username"));
        fetch("/addToCart", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: JSON.stringify({username: username, itemId: item.rowid, cartAction: false})})
        .then(res => res.text())
        .then(res => {
            navigate("/myCart");});
    }
    return <div className="cartItem" onClick={()=>{
        navigate(`/details/${item.rowid}`);
    }}>
        <div className="cartItemImage">
            <div className="displayImage" style={{background: `transparent url(${item.image}) no-repeat center`, backgroundSize: "contain"}}>
            </div>
        </div>
        <div className="cartItemDetails">
            <div>
                <h2 className="itemTitle">{item.title}</h2>
                <small>{item.category}</small>
                <span className="priceNdBtn">
                    <h5 className="itemPrice">${item.price}</h5>
                    <div className="btnDiv">
                        <button onClick={()=>{removeClick()}} className="removeItem btn btn-danger" style={{backgroundColor: "#a90119", borderColor: "#a90119"}} >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </span>
            </div>
        </div>
    </div>
}

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
    
    var getSubtotal = ()=>{
        var subtotal = 0;
        items.map(item=>subtotal = subtotal+parseFloat(item.price));
        var tax = (subtotal*0.13).toFixed(2);
        var total = (subtotal+(subtotal*0.13)).toFixed(2);
        return {"subtotal": subtotal.toFixed(2), "tax": tax, "total": total};
    }

    var renderItems = ()=>{
        if(items.length === 0){
            if(loading === "false"){
                return (<h2>The cart is empty</h2>);  
            }          
        }else{
            return (<> 
                <div className="displayCartPage">
                    <div className="displayCartItems">
                        {items.map(item=>{
                            return <DisplayPaymentItems item={item} />
                        })}
                    </div>
                    <div className="displayPrice">
                        <div className="itemList">
                            {items.map(item=>{
                                return <div><span className="title" style={{fontWeight: "bold"}}>{item.title}</span>: <span className="price">${parseFloat(item.price).toFixed(2)}</span></div>
                            })}
                        </div>
                        <hr />
                        <div className="subTotal">
                            <span className="title"  style={{fontWeight: "bold"}}>Subtotal ({items.length} {items.length == 1 ? <span>item</span> : <span>items</span>})</span>:
                            <span className="price">${getSubtotal().subtotal}</span>
                        </div>

                        {/* paypal button */}
                        <div id="paymentButtons">                    
                            
                        </div>
                    </div>
                </div>
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

    return(<div className="displayMyCartItemsPage">
        <div className="displayitems">
        {renderComponent()}
    </div></div>);
}

export default MyCart; 