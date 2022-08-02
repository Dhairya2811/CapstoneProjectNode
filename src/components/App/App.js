import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navigationbar from "../Navigationbar/Navigationbar";
import Index from "../Index/Index";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register"
import AddItem from "../AddItem/AddItem";
import ItemDetails from "../ItmeDetails/ItemDetails"; 

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Navigationbar />
                <div className="body">
                    <Container>
                        <Routes>
                                <Route exact path="/" element={<Index/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/signin" element={<SignIn/>}/>
                                <Route path="/addItem" element={<AddItem/>}/>
                                <Route path="/details/:id" element={<ItemDetails />} />
                        </Routes>
                    </Container>
                </div>
            </div>
        );
    }
};

export default App;