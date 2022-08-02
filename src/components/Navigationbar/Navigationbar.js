import React, { Component } from "react";
import {  
    NavLink
} from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

class Navigationbar extends Component{
    logout(){
        console.log("logout clicked");
        sessionStorage.removeItem("username");
        window.location.href = "/";
    }
    render(){
        let username = (sessionStorage.getItem("username"));
        var returnNav;
        var userDisplay;
        if(username === null){
            returnNav = <Nav id="Navbarclass" className="me-auto">
                            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                            <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
                        </Nav>;
            userDisplay = <Navbar.Text className="justify-content-end">Not Signed In</Navbar.Text>;
        }else{
            returnNav = <Nav id="Navbarclass" className="me-auto">
                            <Nav.Link as={NavLink} to="#">My Cart</Nav.Link>
                            <Nav.Link as={NavLink} to="#">My Item</Nav.Link>
                            <Nav.Link as={NavLink} to="/addItem">Add Item</Nav.Link>
                            <Nav.Link as={NavLink} to="#" onClick={this.logout}>Log Out</Nav.Link>
                        </Nav>;
            userDisplay = <Navbar.Text className="justify-content-end">Signed in as <strong>{username}</strong></Navbar.Text>;
        }
        return (
            <Navbar fixed="top" style={{backgroundColor: "white"}}>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">App Name</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {returnNav}
                            <Nav>
                                {userDisplay}
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigationbar;