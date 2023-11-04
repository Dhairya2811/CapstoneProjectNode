import React, { Component } from "react";
import Error404 from "../Error404/Error404";

class Register extends Component{
    constructor(props){
        super(props);
        this.submitBtnClick = this.submitBtnClick.bind(this);
    }   
    errDisplay(err, msg){
       if(err){
            let errdiv = document.getElementById("err");
            errdiv.style.display = "block";
            errdiv.innerHTML = msg;
       }else{
            let errdiv = document.getElementById("err");
            errdiv.style.display = "none";
       }           
    }
    submitBtnClick(event){
        let useName = event.target[0].value;
        let email = event.target[1].value;
        let password = event.target[2].value;
        let conformPassword = event.target[3].value;
        if(password == conformPassword){
            var goodName = false;
            var goodEmail = false;
            var goodPassword = false;
            if(String(useName).trim().length !== 0){goodName=true}
            else{console.log("Enter User name")}
            if(String(email).trim().length !== 0){goodEmail=true}
            else{console.log("Enter User name")}
            if(String(password).trim().length !== 0){goodPassword=true;
                if(goodEmail && goodName){
                    fetch("/register", {
                        method:"post",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        credentials:"include",
                        body: JSON.stringify({useName: useName, email: email, password: password})
                    })
                    .then(res=>res.text())
                    .then(res=>{
                        console.log(res);
                        if(res === "Taken"){
                            console.log(res);
                            this.errDisplay(true, "This user name is already taken.")
                        }else{
                            console.log("inserted")
                            // this.errDisplay(false, "");
                            sessionStorage.setItem("user", {username: useName, blocked: 0, admin: 0});
                            console.log(sessionStorage.getItem("username"));
                            window.location.href = "/";
                        }
                        console.log("Dhairya");
                    });
                }
            }
            else{console.log("Enter User name")}
            
            
        }else{
            console.log("conform password and password are not same");
        }
        event.preventDefault();
    }
    returnFunction(){
        if(sessionStorage.getItem("username") == null){
            return <div className="FormPage d-flex justify-content-center" id="register_page" style={{paddingTop: "6%"}}>
                <form onSubmit={this.submitBtnClick}>
                    <div className="alert alert-danger" id="err" style={{display: "none"}}></div>
                    <div className="register-username">
                        <label> User Name </label>
                        <input type="text" placeholder="User Name" className="form-control" autoFocus />
                    </div><br />
                    <div className="register-email">
                        <label> Email </label>
                        <input type="email" placeholder="Email" className="form-control" />
                    </div><br />
                    <div className="register-password">
                        <label> Password </label>
                        <input type="password" placeholder="Password" className="form-control" />
                    </div><br />
                    <div className="register-conform-password">
                        <label> Conform Password </label>
                        <input type="password" placeholder="Conform Password" className="form-control" />
                    </div><br />
                    <input type="submit" value="Submit" className="btn btn-primary login_submit_btn" />
                </form>
            </div>
        }else{
            return <Error404 errorMessage="You are already sign in." linkAvailable="true"/> 
        }
    }
    render(){
        return(
            <div className="d-flex justify-content-center">
                {this.returnFunction()}
            </div>
        );
    }
}

export default Register;