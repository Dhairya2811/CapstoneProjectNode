import { useState } from "react";
import Error404 from "../Error404/Error404";

// var DisplayPaymentItems = ({item})=>{
//     return <div className="item">
//         {console.log(item)}
//     </div>
// }

var Payment = ()=>{
    const [items, setItems] = useState([]);
    if(sessionStorage.getItem("items")!= null){
        setItems(JSON.parse(sessionStorage.getItem("items")));
        sessionStorage.removeItem("items");
    }
    

    var returnComponent = ()=>{
        if(items.length != 0){
            return (<div className="paymentPage">
                <div className="displayPaymentItems">
                    {console.log(items)}
                    {/* {items.map(item=>{
                        return <DisplayPaymentItems item={item} />
                    })} */}
                </div>
                <div className="checkoutPrice">

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
