import React, {Component} from "react";
import { Container } from "react-bootstrap";
import Error404 from "../Error404/Error404";
import {
    Navigate
} from "react-router-dom";

class AddItem extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            inserted: false
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        var title = event.target[0].value;
        var description = event.target[1].value;
        var price = event.target[2].value;
        var image = event.target[3];
        var quantity = event.target[4].value;
        var category = event.target[5].value;
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
                    body: JSON.stringify({title: title, description: description, price:price, image:reader.result, imageName:imageName ,quantity: quantity, category: category})
                }).then(res => res.text())
                .then(res => {
                    // console.log(res);
                    if(res == "inserted"){
                        this.setState({inserted: true})
                    }else{
                    }
                });
            }
        }

    }
    returnDiv(){
        if(sessionStorage.getItem("username") == null){
            <Error404 errorMessage="Please Sign in to add item" linkAvailable = "true"/>
        }else if(this.state.inserted == true){
            this.setState({inserted: false});
            return <Navigate to={"/"} />
        }
        else{
            return <form onSubmit={this.submitForm}>
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
                    <input type="file" id="newItemImage" className="form-control" accept="image/*" required/>
                </div><br />
                <div>
                    <label> Quantity </label>
                    <input type="number" placeholder="Item Quantity" id="newItemQuantity" className="form-control" min="1" required/>
                </div><br />
                <div>
                    <label> Category </label>
                    <select id="newItemCategory" className="form-control">
                        <option value="Toys">Toys</option>
                        <option value="Home">Home</option>
                        <option value="Fashion" selected>Fashion</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div><br />
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>

        }
    }
    render(){
        return(
            <Container>
                {this.returnDiv()}
            </Container>
        );
    }
}

export default AddItem;