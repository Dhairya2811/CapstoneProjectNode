import React, {useEffect, useState} from "react";
import Error404 from "../Error404/Error404";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingComponent/Loading";
import { noImage } from "./image.json";

var AddItem = ({role})=>{ 
    var [inserted, setInserted] = useState(false);
    var [data, setData] = useState();
    var [count, setCount] = useState(0);
    var [loading, setLoading] = useState(true);
    var [uploadImageVal, setUploadImageVal] = useState();
    var [dealValIn, setDealValIn] = useState("no deal");
    var [addDeal, setAddDeal] = useState(false);

    var navigate = useNavigate();

    var submitData = (jsonObj)=>{
        console.log("In SubmitData");
        document.getElementById("err").style.display = "none";
        fetch("/addItem", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: jsonObj
        }).then(res => res.text())
        .then(res => {
            console.log(res);
            if(res == "inserted"){
                setInserted(true);
                navigate("/");
                console.log(res);
            }else{setInserted(false)}
        });
    };  

    var prepJsonResult = (title, description, price, 
        image, imageName, quantity, category, 
        deal, dealPrice = 0, dealText = "")=>{        
            var username = sessionStorage.getItem("username")
            if(deal){
                return JSON.stringify({
                    title: title, 
                    description: description, 
                    price:price, 
                    quantity: quantity, 
                    category: category, 
                    image: image, 
                    imageName:imageName ,
                    username: username,
                    deal: deal,
                    dealText: dealText,
                    dealPrice: dealPrice
                })
            }

            return JSON.stringify({title: title, 
                description: description, 
                price:price, 
                image: image, 
                imageName:imageName ,
                quantity: quantity, 
                category: category, 
                username: username,
                deal: deal,
                dealText: "",
                dealPrice: 0.00
            })
    };









// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// adding new version of code here.

var showError =  (msg)=>{
    let errdiv = document.getElementById("err");
    errdiv.style.display = "block";
    errdiv.innerHTML = msg;
};

var hideError = ()=>{
    let errdiv = document.getElementById("err");
    errdiv.style.display = "none";
    errdiv.innerHTML = "";
}

var priceError = (price)=>{
    if(isNaN(price)){
        showError("Please enter correct number as a price.");
        return false;
    }
    // remove the err block from the page as there is not error 
    hideError();
    return true;
};

var addItem = (image, title, description, price, category, quantity, passDeals, dealText, dealPrice)=> {
    if(image.files.length == 1){
        var reader = new FileReader(); 
        reader.readAsDataURL(image.files[0]);
        let filepathtemp = image.value;
        let filepathtemparr = String(filepathtemp).split("\\");
        var imageName = (filepathtemparr[filepathtemparr.length-1]);
        if(addDeal && passDeals ){
            reader.onload = ()=>{
                submitData(prepJsonResult(title, description, price, reader.result, imageName, 
                    quantity, category, true, dealPrice, dealText));
            };
        }
        else{
            reader.onload = ()=>{
                submitData(prepJsonResult(title, description, price, reader.result, imageName, 
                    quantity, category, false));
            };
        }
    }
    else{
        var image = noImage;
        var imageName = 'No Image'
        if(addDeal && passDeals){
            submitData(prepJsonResult(title, description, price, image, imageName, 
                quantity, category, true, dealPrice, dealText));
        }else{
            submitData(prepJsonResult(title, description, price, image, imageName, 
                quantity, category, false));
        }
    }
};

var editItem = (image, title, description, price, category, quantity, passDeals, dealText, dealPrice)=>{
    var reader = new FileReader();
    var imageName = "";
    // if there is a new image has been uploaded then execute the following code.
    if(image.files[0] != null){
        reader.readAsDataURL(image.files[0])
        let filepathtemp = image.value;
        let filepathtemparr = String(filepathtemp).split("\\");
        imageName = (filepathtemparr[filepathtemparr.length-1]);
        reader.onload= ()=>{
            /**
             * JSON.stringify({id: data.rowid, title: title, description: description, price:price, image:reader.result, 
             * imageName:imageName ,quantity: quantity, category: category, username: sessionStorage.getItem("username"), 
             * dealPrice: dealPrice, dealText: dealText})
             */ 
            if(addDeal && passDeals){
                console.log("edit the item with the deal and with new image.");
            }else{
                console.log("edit item without deal but with new image.");
            }
        }
    }
    // if there is no new image then
    else{
        var imageData = data.image;
        var imageName = data.imageName;
        if(addDeal && passDeals){
            console.log("edit the item with the deal and with new image.");
        }else{
            console.log("edit item without deal but with new image.");
        }
    }
};

var submitForm = async (event) => {
    event.preventDefault();
    var image = event.target[0];
    var title = event.target[1].value;
    var description = event.target[2].value;
    var price = event.target[3].value;
    var category = event.target[4].value;
    var quantity = event.target[5].value;
    var dealText = "";
    var dealPrice = 0.00;
    var passDeals = false;
    var error = false;
    if(addDeal){
        // check if the deal is appropreate
        // checking if deal is in price
        console.log(`dealValIn: ${dealValIn}`);
        if(dealValIn == "price"){
            var offPrice = parseFloat(event.target[10].value);
            console.log(`offPrice in price: ${offPrice}`);
            if(offPrice<price && offPrice > 0.00){
                error = false;
                passDeals = true;
                dealText = `$${offPrice} off`;
                dealPrice = price-offPrice;
            }else{
                passDeals = false;
                error = true;
            }
        }
        // checking if the deal is in percent 
        else{
            var offPrice = parseFloat(event.target[8].value);
            var pass = offPrice<100 && !isNaN(offPrice)
            if(pass == true){
                error = false;
                passDeals = true;
                dealText = `${offPrice}% off`;
                dealPrice = price-(price*offPrice/100);
            }else{
                passDeals = false;
                error = true;
            }
        }
    }
    // checking if new item will be added or old item will be edited.
    if(!error){
        if(role == "new"){
            // if the new price is null, then give the error.
            if(priceError(price)){
                await addItem(image, title, description, price, category, quantity, passDeals, dealText, dealPrice);
            }
        }
        else if(role == "edit"){
            if(priceError(price)){
                await editItem(image, title, description, price, category, quantity, passDeals, dealText, dealPrice);
            }
        }
    }
    else{
        showError("Please enter the appropriate price for deal.");
    }
};

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











    // var submitForm = (event) => {
    //     event.preventDefault();
    //     var image = event.target[0];
    //     var title = event.target[1].value;
    //     var description = event.target[2].value;
    //     var price = event.target[3].value;
    //     var category = event.target[4].value;
    //     var quantity = event.target[5].value;
    //     var dealText;
    //     var dealPrice;
    //     var passDeals = false;
    //     if(dealValIn == "price"){
    //         var offPrice = event.target[10].value;
    //         if(offPrice<price){
    //             passDeals = true;
    //             dealText = `$${offPrice} off`;
    //             dealPrice = price-offPrice;
    //         }else{passDeals = false;}
    //     }else if(dealValIn == "percent"){
    //         var offPrice = event.target[8].value;
    //         if(offPrice<100){
    //             passDeals = true;
    //             dealText = `${offPrice}% off`;
    //             dealPrice = price-(price*offPrice/100);
    //         }
    //         else{passDeals = false;}
    //     }
    //     if(passDeals){
    //         if(role == "new"){
    //             if(isNaN(price)){
    //                 let errdiv = document.getElementById("err");
    //                 errdiv.style.display = "block";
    //                 errdiv.innerHTML = "Please enter correct number as a price.";
    //             }else{     
    //             //  -------------------------------------------------------------------------------------------------------
    //                 // remove the err block from the page as there is not error 
    //                 let errdiv = document.getElementById("err");
    //                 errdiv.style.display = "none";
    //                 errdiv.innerHTML = "";
    //             //  -------------------------------------------------------------------------------------------------------
    //                 // checking if there is an image uploaded.
    //                 if(image.files.length == 1){
    //                     var reader = new FileReader(); 
    //                     reader.readAsDataURL(image.files[0]);
    //                     let filepathtemp = image.value;
    //                     let filepathtemparr = String(filepathtemp).split("\\");
    //                     var imageName = (filepathtemparr[filepathtemparr.length-1])
    //                     if(addDeal){
    //                         // send dealText and dealPrice with other data too.
    //                         reader.onload= ()=>{
    //                             submitData(prepJsonResult(title, description, price, reader.result, imageName, 
    //                                 quantity, category, true, dealPrice, dealText));
    //                         }
    //                     }else{
    //                         // send the normal data
    //                         reader.onload= ()=>{
    //                             submitData(prepJsonResult(title, description, price, reader.result, imageName, 
    //                                 quantity, category, false));
    //                         }
    //                     } 
    //                 }
    //                 // if there is no image then 
    //                 else{
    //                     var image = noImage;
    //                     var imageName = 'No Image'
    //                     if(addDeal){
    //                         submitData(prepJsonResult(title, description, price, image, imageName, 
    //                             quantity, category, true, dealPrice, dealText));
    //                     }else{
    //                         submitData(prepJsonResult(title, description, price, image, imageName, 
    //                             quantity, category, false));
    //                     }

    //                 }
    //             }    
    //         }else if(role == "edit"){
    //             console.log("edit deal")
    //             if(isNaN(price)){
    //                 let errdiv = document.getElementById("err");
    //                 errdiv.style.display = "block";
    //                 errdiv.innerHTML = "Please enter correct number as a price.";
    //                 document.querySelector(".AddItem_container").style.marginBottom = "3em";
    //             }else{
    //                 let errdiv = document.getElementById("err");
    //                 errdiv.style.display = "none";
    //                 errdiv.innerHTML = "";
    //                 var reader = new FileReader();
    //                 var imageName = "";
                    
    //                 if(image.files[0] != null){
    //                     reader.readAsDataURL(image.files[0])
    //                     let filepathtemp = image.value;
    //                     let filepathtemparr = String(filepathtemp).split("\\");
    //                     var imageName = (filepathtemparr[filepathtemparr.length-1]);
    //                     reader.onload= ()=>{
    //                         // JSON.stringify({id: data.rowid, title: title, description: description, price:price, image:reader.result, imageName:imageName ,quantity: quantity, category: category, username: sessionStorage.getItem("username"), dealPrice: dealPrice, dealText: dealText})
                            
    //                     }
    //                 }else{
    //                     var imageData = data.image;
    //                     var imageName = data.imageName;
    //                     fetch("/updateItem", {
    //                         method:"post",
    //                         headers:{
    //                             "Content-Type":"application/json",
    //                         },
    //                         credentials: "include",
    //                         body: JSON.stringify({id: data.rowid,title: title, description: description, price:price, image:imageData, imageName:imageName ,quantity: quantity, category: category, username: sessionStorage.getItem("username"), dealPrice: dealPrice, dealText: dealText})
    //                     }).then(res => res.text())
    //                     .then(res => {
    //                         if(res == "updated"){
    //                             navigate("/");
    //                             setInserted(true);
    //                         }else{setInserted(false)}
    //                     });
    //                 }
    //             }
    //         }
    //     }else{
    //         console.log("no deal")
    //         if(dealValIn == "price"){
    //             let errdiv = document.getElementById("err");
    //             errdiv.style.display = "block";
    //             errdiv.innerHTML = `Deal off price should be less then $${price}.`;
    //             document.querySelector(".AddItem_container").style.marginBottom = "3em";
    //         }else if(dealValIn == "percent"){
    //             let errdiv = document.getElementById("err");
    //             errdiv.style.display = "block";
    //             errdiv.innerHTML = `Deal off price should be less then 100%.`;
    //             document.querySelector(".AddItem_container").style.marginBottom = "3em";
    //         }
    //     }
    // }

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
                setUploadImageVal(res.image)
                setTimeout(()=>{
                    document.getElementById("newItemTitle").value = res.title;
                    document.getElementById("newItemDescription").value = res.description;
                    document.getElementById("newItemPrice").value = res.price;
                    document.getElementById("newItemQuantity").value = res.quantity;
                    document.getElementById("newItemCategory").value = res.category;     
                    document.getElementById("uploadedImage").src = res.image;
                }, 100);
            });
        }else if(role == "new"){
            setUploadImageVal(noImage);
            setLoading(false);     
        }
    });
    var dealcheckclick = ()=>{
        var dealCheck = document.getElementById("addDealCheckbox").checked;
        if(dealCheck){
            document.getElementById("percentRadio").disabled = false;
            document.getElementById("priceRadio").disabled = false;
            setAddDeal(true);
        }
        else{
            document.getElementById("percentRadio").disabled = true;
            document.getElementById("priceRadio").disabled = true;
            document.getElementById("percentDealValue").value = "";
            document.getElementById("priceDealValue").value = "";
            document.getElementById("percentDealValue").disabled = true;
            document.getElementById("priceDealValue").disabled = true;
            document.getElementById("priceRadio").checked = false;
            document.getElementById("percentRadio").checked = false;
            setAddDeal(false);

        }
    }
    var dealRadioChange = ()=>{
        if(document.getElementById("priceRadio").checked){            
            document.getElementById("priceDealValue").disabled = false;
            document.getElementById("percentDealValue").value = "";
            document.getElementById("percentDealValue").disabled = true;
            setDealValIn("price");
        }else{
            document.getElementById("priceDealValue").value = "";
            document.getElementById("percentDealValue").disabled = false;
            document.getElementById("priceDealValue").disabled = true;
            setDealValIn("percent");
        }
    }
    var imageChange = (evt)=>{
        var tgt = evt.target.files;
        var fileReader = new FileReader();
        fileReader.onload = function(){
            document.getElementById("uploadedImage").src = fileReader.result;
            document.getElementById("labelToUploadImage").innerHTML = "Change item image";

        };
        fileReader.readAsDataURL(tgt[0]);
    };
    var returnDiv = ()=>{
        if(sessionStorage.getItem("username") == null){
            <Error404 errorMessage="Please Sign in to add item" linkAvailable = "true"/>
        }else if(inserted == true){
            setInserted(false);
            navigate("/");
        }
        else if(loading == true){
            return <LoadingSpinner />            
        }else{
            return <div className="addItemForm">
                <form onSubmit={submitForm}>
                    <div className="alert alert-danger" id="err" style={{display: "none"}}></div>
                    {/* form to add items */}
                    <div className="addItemGrid">
                        <div className="addItemImageGrid">
                            <div>
                                <div className="imageInImageUploader">
                                    <div>
                                        <div className="itemImageInUpload">
                                            <img src={uploadImageVal} id="uploadedImage" className="ItemImage"/>
                                        </div>
                                        <div className="uploadNewImage">
                                            <input type="file" accept="image/*" id="uploadImage" onChange={imageChange} />
                                            <label htmlFor="uploadImage"><i id="uploadIcon" className="fa fa-upload"></i><span id="labelToUploadImage">Choose image for item</span></label><br/>
                                        </div>
                                    </div>
                                </div>
                            </div><br />
                        </div>
                        <div className="addItemInfoGrid">
                            <div>
                                <label> Title </label>
                                <input type="text" placeholder="Item Title" id="newItemTitle" className="form-control" required autoFocus/>
                            </div><br/>
                            <div>
                                <label> Discription </label>
                                <textarea rows="4" id="newItemDescription" placeholder="Itme Description" className="form-control" required></textarea>
                            </div><br />
                            <div>
                                <label> Actual Price </label>
                                <input type="text" placeholder="Actual Price" id="newItemPrice" className="form-control" required/>
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

                        </div>
                    </div>
                    <div>
                        <label> Quantity </label>
                        <input type="number" placeholder="Item Quantity" id="newItemQuantity" className="form-control" min="1" required/><br/>
                        
                        {/* Add deal radio button */}
                        <div id="dealSection">    
                            {/* this is the check box */}
                            <div id="dealCheckboxSession" style={{marginTop: "7px"}}>
                                <input className="form-check-input" type="checkbox" id="addDealCheckbox" onChange={dealcheckclick.bind(this)}/>&nbsp;
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Add deal
                                </label>&emsp;&emsp;
                            </div>
                            {/* this is the deal selection radio buttons */}
                            <div id="addDealRadio">
                                <input className="form-check-input" type="radio" name="deal" id="percentRadio" onChange={dealRadioChange.bind(this)} style={{marginTop: "10px"}} disabled/>&nbsp;
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    <div className="input-group mb-3">
                                        <input type="number" id="percentDealValue" className="form-control" disabled/>
                                        <span className="input-group-text" id="basic-addon2">%</span>
                                    </div>
                                </label>&emsp;
                                <input className="form-check-input" type="radio" id="priceRadio" name="deal" onChange={dealRadioChange.bind(this)}  style={{marginTop: "10px"}} disabled />&nbsp;
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <input type="number" id="priceDealValue" className="form-control" disabled/>
                                    </div>
                                </label>
                            </div>
                            {/* Radio button end */}
                        </div>
                        {/* Deal section end. */}
                    </div><br />
                    <div id="addItemSubmitBtn">
                        {role == "new" ? 
                            <input type="submit" value="Add" className="btn btn-submit" />
                        : 
                            <input type="submit" value="Update" className="btn btn-submit" />
                        }
                    </div>
                </form>
            </div>
        }
    }
    return(
        <div className="AddItem_container">
            {returnDiv()}
        </div>
    );
}

export default AddItem;