import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error404 from "../Error404/Error404";
import LoadingSpinner from "../LoadingComponent/Loading";

var DisplayPaymentItems = ({item})=>{
    var navigate = useNavigate();
    var removeClick = ()=>{
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
                    <h5 className="itemPrice">${item.deal == 1 ? item.dealPrice : item.price}</h5>
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
                console.log(res);
                setItems(res);
                setLoading("false");
            });
        }
    });
    
    var getSubtotal = ()=>{
        var subtotal = 0;
        items.map(item=>subtotal = subtotal+parseFloat(item.deal == 1 ? item.dealPrice : item.price));
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
                        <div className="priceText">
                            <div className="itemList">
                                {items.map(item=>{
                                    return <div><span className="title" style={{fontWeight: "bold"}}>{item.title}</span>: <span className="price">${parseFloat(item.deal == 1 ? item.dealPrice : item.price).toFixed(2)}</span></div>
                                })}
                            </div>
                            <hr />
                            <div className="subTotal">
                                <span className="title"  style={{fontWeight: "bold"}}>Subtotal ({items.length} {items.length == 1 ? <span>item</span> : <span>items</span>})</span>:
                                <span className="price">${getSubtotal().subtotal}</span>
                            </div>
                        </div>

                        {/* paypal button */}
                        <div className="cartPaymentButtonDiv">                    
                            {/* <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}} > */}
                            <button className="btn btn-primary cartPaymentButton" onClick={()=>{checkout()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16" style={{marginRight: "6px", marginTop: "-5px"}}>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>
                                <span className="text">Checkout</span>
                            </button>
                            {/* </div>  */}
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