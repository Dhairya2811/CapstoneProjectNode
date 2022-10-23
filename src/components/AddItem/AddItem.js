import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import Error404 from "../Error404/Error404";
import {
    useNavigate
} from "react-router-dom";
import LoadingSpinner from "../LoadingComponent/Loading";

var AddItem = ({role})=>{ 
    var [inserted, setInserted] = useState(false);
    var [data, setData] = useState();
    var [count, setCount] = useState(0);
    var [loading, setLoading] = useState(true);

    var navigate = useNavigate();
    var submitForm = (event) => {
        event.preventDefault();
        var title = event.target[0].value;
        var description = event.target[1].value;
        var price = event.target[2].value;
        var image = event.target[3];
        var quantity = event.target[4].value;
        var category = event.target[5].value;
        if(role == "new"){
            if(isNaN(price)){
                let errdiv = document.getElementById("err");
                errdiv.style.display = "block";
                errdiv.innerHTML = "Please enter correct number as a price.";
            }else{
                document.getElementById("err").style.display = "none";
                var reader = new FileReader();
                reader.readAsDataURL(image.files[0])
                let filepathtemp = image.value;
                let filepathtemparr = String(filepathtemp).split("\\");
                var imageName = (filepathtemparr[filepathtemparr.length-1])
                reader.onload= ()=>{
                    fetch("/addItem", {
                        method:"post",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        credentials: "include",
                        body: JSON.stringify({title: title, description: description, price:price, image:reader.result, imageName:imageName ,quantity: quantity, category: category, username: sessionStorage.getItem("username")})
                    }).then(res => res.text())
                    .then(res => {
                        if(res == "inserted"){
                            setInserted(true)
                        }else{
                        }
                    });
                }
            }    
        }else if(role == "edit"){
            if(isNaN(price)){
                let errdiv = document.getElementById("err");
                errdiv.style.display = "block";
                errdiv.innerHTML = "Please enter correct number as a price.";
            }else{
                document.getElementById("err").style.display = "none";
                var reader = new FileReader();
                if(image.files[0] != null){
                    reader.readAsDataURL(image.files[0])
                    let filepathtemp = image.value;
                    let filepathtemparr = String(filepathtemp).split("\\");
                    var imageName = (filepathtemparr[filepathtemparr.length-1])
                    reader.onload= ()=>{
                        fetch("/updateItem", {
                            method:"post",
                            headers:{
                                "Content-Type":"application/json",
                            },
                            credentials: "include",
                            body: JSON.stringify({title: title, description: description, price:price, image:reader.result, imageName:imageName ,quantity: quantity, category: category, username: sessionStorage.getItem("username")})
                        }).then(res => res.text())
                        .then(res => {
                            // console.log(res);
                            if(res == "inserted"){
                                navigate("/");
                                setInserted(true)
                            }else{setInserted(false)}
                        });
                    }
                }else{
                    var imageData = data.image;
                    var imageName = data.imageName;
                    fetch("/updateItem", {
                        method:"post",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        credentials: "include",
                        body: JSON.stringify({id: data.rowid,title: title, description: description, price:price, image:imageData, imageName:imageName ,quantity: quantity, category: category, username: sessionStorage.getItem("username")})
                    }).then(res => res.text())
                    .then(res => {
                        if(res == "updated"){
                            navigate("/");
                            setInserted(true);
                        }else{setInserted(false)}
                    });
                }
            }
        }
    }
    useEffect(()=>{
        var urlArr = (window.location.pathname.split("/"));
        if(role == 'edit' && count == 0){
            setCount(1);            
            setLoading(true);
            var id = urlArr[urlArr.length -1];
            fetch(`/getItem/${id}`)
            .then(res => res.json())
            .then(res => {   
                setData(res); 
                setLoading(false);
                setTimeout(()=>{
                    console.log(res.title);
                    document.getElementById("newItemTitle").value = res.title;
                    document.getElementById("newItemDescription").value = res.description;
                    document.getElementById("newItemPrice").value = res.price;
                    document.getElementById("displayImage").style.display = "block";
                    document.getElementById("displayImage").src = res.image;
                    document.getElementById("newItemQuantity").value = res.quantity;
                    document.getElementById("newItemCategory").value = res.category;     
                    document.getElementById("newItemImage").required = false; 
                }, 100);
            });
        }else if(role == "new"){
            setLoading(false);            
        }
    });
    var returnDiv = ()=>{
        // if(loading == false){
        //     
        // }
        if(sessionStorage.getItem("username") == null){
            <Error404 errorMessage="Please Sign in to add item" linkAvailable = "true"/>
        }else if(inserted == true){
            setInserted(false);
            navigate("/");
        }
        else if(loading == true){
            return <LoadingSpinner />            
        }else{
            return <form onSubmit={submitForm}>
                    <div className="alert alert-danger" id="err" style={{display: "none"}}></div>
                    <div>
                        <label> Title </label>
                        <input type="text" placeholder="Item Title" id="newItemTitle" className="form-control" required autoFocus/>
                    </div><br />
                    <div>
                        <label> Discription </label>
                        <textarea rows="4" id="newItemDescription" placeholder="Itme Description" className="form-control" required></textarea>
                    </div>
                    <div>
                        <label> Price </label>
                        <input type="text" placeholder="Price" id="newItemPrice" className="form-control" required/>
                    </div><br />
                    <div>
                        <label> Image </label>
                        <img src="" style={{display: "none", width:"10em", marginBottom: "1em"}} id="displayImage" />
                        <input type="file" id="newItemImage" className="form-control" accept="image/*" required/>
                    </div><br />
                    <div>
                        <label> Quantity </label>
                        <input type="number" placeholder="Item Quantity" id="newItemQuantity" className="form-control" min="1" required/>
                    </div><br />
                    <div>
                        <label> Category </label>
                        <select id="newItemCategory" className="form-control" defaultValue="Fashion">
                            <option value="Toys">Toys</option>
                            <option value="Home">Home</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div><br />
                    {role == "new" ? 
                        <input type="submit" value="Add" className="btn btn-primary" />
                    : 
                        <input type="submit" value="Update" className="btn btn-primary" />
                    }
                </form>
        }
    }
    return(
        <Container>
            {returnDiv()}
        </Container>
    );
}

export default AddItem;