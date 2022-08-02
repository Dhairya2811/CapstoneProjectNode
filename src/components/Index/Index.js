import React, {Component} from "react";
import ItemDisplay from "../ItemDisplay/ItemDisplay";

class Index extends Component{
    state = {
        items: []
    }
    loadItems(items){
        return<div>
            {items.map((items, index) => {
                // console.log(items)
                return<div key={index}>
                    Title: {items.title}
                </div>
            })}
        </div>
    }
    componentDidMount(){
        if(window.location.pathname == "/"){
            fetch("/index")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    items: res
                });
            });
        }
    }
    render(){
        return(
            <div>
                This is <strong>Index</strong> Component
                <div id="displayitems">
                    {(this.state.items).map((item, index)=>{
                        return <ItemDisplay item = {item} key={index} />
                    })}
                </div>
                
            </div>
        );
    }
}

export default Index;