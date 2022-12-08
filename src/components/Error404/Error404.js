import React, {Component} from "react";
import {image404} from "./images.json";

class Error404 extends Component{
    linkDiv(){
        if(this.props.linkAvailable == "true"){
            return(<>
                <div>{this.props.errorMessage}</div>
            </>)
        }
    }
    render(){
        return(
            <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                    <img src={image404} />
                    <div style={{float: "left", marginLeft: "6em", marginTop: "3em"}}>
                        <h1>Page not found!</h1>
                        <div>{this.linkDiv()}</div>
                    </div>
                </div>
            </>
        );
    }
}

export default Error404;