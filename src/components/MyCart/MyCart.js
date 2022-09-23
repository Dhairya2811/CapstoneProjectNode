import { Component } from "react";
import Error404 from "../Error404/Error404";
import ItemDisplay from "../ItemDisplay/ItemDisplay";

class MyCart extends Component{
    state = {
        items: [],
        empty: "Loading...",
        loading: "true"
    }

    componentDidMount(){
        fetch(`/getCartItems/${sessionStorage.getItem("username")}`)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                items: res,
                loading: "false"
            });
        });
    }
    renderItems(){
        if(this.state.items.length === 0){
            if(this.state.loading == "false"){
                this.setState({empty: "The cart is empty"})
            }
            return (<h2>{this.state.empty}</h2>);            
        }else{
            return (<>{this.state.items.map((item, index)=>{
                return <ItemDisplay item = {item} key={index} />
            })}</>);
        }
    }
    renderComponent(){
        if(sessionStorage.getItem("username") === null){
            return <Error404 errorMessage="You are not signed in." linkAvailable="true"/>
        }else{
            return (<>{this.renderItems()}</>);
        }
    }

    render(){
        return(<div className="displayitems">{this.renderComponent()}</div>);
    }
}

export default MyCart; 