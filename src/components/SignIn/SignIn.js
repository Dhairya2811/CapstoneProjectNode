import React, {Component} from "react";
import Error404 from "../Error404/Error404";

class SignIn extends Component{
    constructor(props){
        super(props);
        this.submitBtnClick = this.submitBtnClick.bind(this);
    }
    submitBtnClick(event){
        let userName = event.target[0].value;
        let password = event.target[1].value;
        var goodUserName = false;
        var goodPassword = false;
        if(String(userName).trim().length !==0){goodUserName = true;
            document.getElementById("err").style.display = "none";
        }
        else{goodUserName = false; 
            let errdiv = document.getElementById("err");
            errdiv.style.display = "block";
            errdiv.innerHTML = "Please enter user name";
        }
        if(String(password).trim().length !==0){goodPassword = true;
            document.getElementById("err").style.display = "none";
        }
        else{goodPassword = false;        
            let errdiv = document.getElementById("err");
            errdiv.style.display = "block";
            errdiv.innerHTML = "Please enter password";}
        if(goodUserName && goodPassword){
            fetch("/signIn", {
                method: "post",
                headers:{
                    "Content-Type":"application/json",
                },
                credentials:"include",
                body: JSON.stringify({userName: userName, password: password})
            })
            .then(res => res.json())
            .then(res=>{
                var res = res.res;
                if(res == "incorrect username"){
                    let errdiv = document.getElementById("err");
                    errdiv.style.display = "block";
                    errdiv.innerHTML = `Can not find account with User Name ${userName}.`;
                }else if(res == "incorrect password"){
                    let errdiv = document.getElementById("err");
                    errdiv.style.display = "block";
                    errdiv.innerHTML = "Incorrect Password.";
                }else{
                    let errdiv = document.getElementById("err");
                    errdiv.style.display = "none";
                    sessionStorage.setItem("user", JSON.stringify({username: res.username, blocked: res.blocked, admin: res.admin}));
                    window.location.href = "/"
                }
            });
        }
        event.preventDefault();
    }
    returnFunction(){
        if(sessionStorage.getItem("username") == null){
            return <div className="FormPage d-flex justify-content-center" id="login_page">
                <form onSubmit={this.submitBtnClick}>
                    <div className="alert alert-danger" id="err" style={{display: "none"}}></div>
                    <div className="signin-username">
                        <label> User Name </label>
                        <input type="text" placeholder="User Name" className="form-control" autoFocus />
                    </div><br />
                    <div className="signin-password">
                        <label> Password </label>
                        <input type="password" placeholder="password" className="form-control" />
                    </div><br />
                    <input type="submit" className="btn btn-primary login_submit_btn" value="Submit" />
                </form>
            </div>
        }else{
            return <Error404 errorMessage="You are already sign in." linkAvailable="true"/>
        }
        // console.log(sessionStorage.getItem("username"))
    }
    render(){
        const returnfunction = this.returnFunction();
        return(
            <div className="d-flex justify-content-center">
                {this.returnFunction()}
            </div>
        );
    }
}

export default SignIn;
