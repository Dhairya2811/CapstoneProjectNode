import { useState, useEffect } from "react";
import Error404 from "../Error404/Error404";

var DisplayPaymentItems = ({item})=>{
    return <div className="paymentListItem">
        {console.log(item)}
        <div className="paymentListImage">
            <img src={item.image}/>
        </div>
        <div className="paymentListDetails">
            <div>
                <h3>{item.title}</h3>
                <small>{item.category}</small>
                <h3>${item.price}</h3>
            </div>
        </div>
    </div>
}

var Payment = ()=>{
    const [items, setItems] = useState([]);

    useEffect(()=>{
        var subtotal = 0;
        items.map(item=>subtotal = subtotal+parseFloat(item.price));
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
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                const transaction = orderData.purchase_units[0].payments.captures[0];
                alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
              });
            }
          }).render('#paypal-button-container');
    });
    
    if(sessionStorage.getItem("items")!= null){
        setItems(JSON.parse(sessionStorage.getItem("items")));
        sessionStorage.removeItem("items");
    }
    var getSubtotal = ()=>{
        var subtotal = 0;
        items.map(item=>subtotal = subtotal+parseFloat(item.price));
        var tax = (subtotal*0.13).toFixed(2);
        var total = (subtotal+(subtotal*0.13)).toFixed(2);
        return {"subtotal": subtotal.toFixed(2), "tax": tax, "total": total};
    }

    var returnComponent = ()=>{
        if(items.length != 0){
            return (<div className="paymentPage">
                <div className="displayPaymentItems">
                    {console.log(items)}
                    {items.map(item=>{
                        return <DisplayPaymentItems item={item} />
                    })}
                </div>
                <div className="checkoutPrice" style={{height: `${window.innerHeight * 0.9}px`}}>
                    <h2>Payment</h2>
                    <hr />
                    <div className="itemList">
                        {items.map(item=>{
                            return <div><span className="title">{item.title}</span>: <span className="price">${parseFloat(item.price).toFixed(2)}</span></div>
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
