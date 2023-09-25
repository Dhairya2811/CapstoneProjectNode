import { useState, useEffect } from "react";
import Error404 from "../Error404/Error404";
import { useNavigate } from "react-router-dom";

var DisplayPaymentItems = ({item})=>{
    return <div className="paymentListItem">
        <div className="paymentListImage">
            <div className="displayImage" style={{background: `transparent url(${item.image}) no-repeat center`, height: "100%", width: "184px", backgroundSize: "contain"}}>
            </div>
        </div>
        <div className="paymentListDetails">
            <div>
                <h3>{item.title}</h3>
                <small>{item.category}</small>
                <h3>${item.deal == 1 ? item.dealPrice : item.price}</h3>
            </div>
        </div>
    </div>
}

var Payment = ()=>{
    const [items, setItems] = useState([]);
    var navigate = useNavigate();
    useEffect(()=>{
        var subtotal = 0;
        items.map(item=>subtotal = subtotal+parseFloat(item.deal == 1 ? item.dealPrice : item.price));
        var total = (subtotal+(subtotal*0.13)).toFixed(2);
        paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: `${total}` // Can also reference a variable or function
                  }
                }]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(function(orderData) {
                // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                // const transaction = orderData.purchase_units[0].payments.captures[0];
                // alert(`The order has been placed successfully.\nThank you for shopping.`);
                document.getElementById("purchaseMessage").style.display = "block";
                var count = 0;
                setTimeout(()=>{
                    var userName = sessionStorage.getItem("username");
                    var itemIds = [];
                    var itemQuantities = [];
                    items.map(item=>{
                        itemIds.push(item.rowid);
                        itemQuantities.push(item.quantity);
                    });
                    if(count == 0){
                        fetch("/successfulPurchase", {
                            method: "post",
                            headers:{
                                "Content-Type":"application/json",
                            },
                            credentials:"include",
                            body: JSON.stringify({userName: userName, items: [itemIds, itemQuantities]})
                        })
                        .then(res => res.text())
                        .then(res => {
                            console.log(res)
                            if(res == "purchased"){
                                document.getElementById("purchaseMessage").style.display = "none";
                                navigate("/");
                            }
                        });
                        console.log(count);
                        count++;
                    }
                }, 2000);
                // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
              });
            }
          }).render('#paypal-button-container');
          console.log("effect call.");
    });
    
    if(sessionStorage.getItem("items")!= null){
        setItems(JSON.parse(sessionStorage.getItem("items")));
        sessionStorage.removeItem("items");
    }
    var getSubtotal = ()=>{
        var subtotal = 0;
        items.map(item=>subtotal = subtotal+parseFloat(item.deal == 1 ? item.dealPrice : item.price));
        var tax = (subtotal*0.13).toFixed(2);
        var total = (subtotal+(subtotal*0.13)).toFixed(2);
        return {"subtotal": subtotal.toFixed(2), "tax": tax, "total": total};
    }

    var returnComponent = ()=>{
        if(items.length != 0){
            return (
                <div>
                    <div id="purchaseMessage" className="alert alert-success" style={{display: "none"}}>
                            The order has been placed successfully. Thank you for shopping.
                        </div>
                    <div className="paymentPage">
                        <div className="displayPaymentItems">
                            {items.map(item=>{
                                return <DisplayPaymentItems item={item} />
                            })}
                        </div>
                        <div className="checkoutPrice">
                            <h2>Payment</h2>
                            <hr />
                            <div className="itemList">
                                {items.map(item=>{
                                    return <div><span className="title">{item.title}</span>: <span className="price">${parseFloat(item.deal == 1 ? item.dealPrice : item.price).toFixed(2)}</span></div>
                                })}
                            </div>
                            <hr />
                            <div className="subTotal">
                                <span className="title">Subtotal</span>:
                                <span className="price">${getSubtotal().subtotal}</span>
                            </div>
                            <div className="tax">
                                <span className="title">Tax</span>:
                                <span className="price">${getSubtotal().tax}</span>
                            </div>
                            <hr />
                            <div className="total">
                                <span className="title">Total</span>:
                                <span className="price">${getSubtotal().total}</span>
                            </div>

                            {/* paypal button */}
                            <div id="paymentButtons">                    
                                <div id="paypal-button-container" ></div>
                            </div>

                        </div>
                    </div>
            </div>);
        }else{
            return <Error404 errorMessage="There is no URL like this." linkAvailable = "true" />
        }
    }
    return(<>
        {returnComponent()}
    </>);
};

export default Payment;
