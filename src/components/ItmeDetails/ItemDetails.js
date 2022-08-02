import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

var ItemDetails = () => {
    var [item, setItem] = useState();
    var {id} = useParams();
    
    useEffect(()=>{
        fetch(`/getItem/${id}`)
        .then(res => res.json())
        .then(res=>{setItem(res)});
    });
    
    var addToCart = ()=>{
        let username = (sessionStorage.getItem("username"));
        let itemID = id;
        fetch("/addToCart", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: JSON.stringify({username: username, itemId: itemID})})
        .then(res => res.text())
        .then(res => console.log(res))
    } 

    var returnFun = ()=>{
        if(item == undefined){
            <div style={{height: window.innerHeight, width: window.innerWidth, zIndex: 1, backgroundColor: "gray"}}></div>
        }else{
            return <>
                <div style={{ width:"100%", display: "grid", gridTemplateColumns: "30% auto", marginTop: "1em"}}>
                    <div style={{height: "100%", width: "100%"}}>
                        <img src={item.image} style={{marginTop: "1em", marginLeft:"5%", width: "90%"}}/>
                        <h2 style={{width:"100%", marginLeft: "1.5em"}}>${item.price}</h2>
                    </div>
                    <div style={{height: "100%", width: "100%",marginLeft:"2em" , marginTop: "1em"}}>
                        <h1 style={{marginBottom: "0px"}}>{item.title}</h1>
                        <small style={{marginTop: "0px"}}>{item.category}</small>
                        {/* <textarea style={{borderWidth: "0px", borderColor: "transparent", backgroundColor:"transparent"}} className="form-control" disabled>{item.description}</textarea> */}
                        <pre style={{fontSize: "15px", marginTop: "2em"}}>{item.description}</pre>
                    </div>
                </div>
                <input style={{marginTop: "1em", marginLeft: "3em"}} className="btn btn-primary" type="button" value="Add to cart" onClick={addToCart} />    
            </>
        }
    }

    return(
        <div>
            {returnFun()}
        </div>
    );
}

export default ItemDetails;