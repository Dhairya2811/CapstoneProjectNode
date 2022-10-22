import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

var Navigationbar = ()=>{
    var onDropDown = (e)=>{
        window.location.href = "/category/"+e;
    };
    var logout = ()=>{
        sessionStorage.removeItem("username");
        window.location.href = "/";
    }
    let username = (sessionStorage.getItem("username"));
    var returnNav;
    var userDisplay;
    if(username === null){
        returnNav = <Nav id="Navbarclass" className="me-auto">
                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                        <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
                        <NavDropdown title="Category" onSelect={onDropDown}>
                            <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Toys">Toys</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Home">Home</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Fashion">Fashion</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="Lowtohigh">Price: Low to High</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Hightolow">Price: Hign to Low</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>;
        userDisplay = <Navbar.Text className="justify-content-end">Not Signed In</Navbar.Text>;
    }else{
        returnNav = <Nav id="Navbarclass" className="me-auto">
                        <Nav.Link as={NavLink} to="/myCart">My Cart</Nav.Link>
                        <Nav.Link as={NavLink} to="/myItems">My Item</Nav.Link>
                        <Nav.Link as={NavLink} to="/addItem">Add Item</Nav.Link>
                        <Nav.Link as={NavLink} to="#" onClick={logout}>Log Out</Nav.Link>
                        <NavDropdown title="Category" onSelect={onDropDown}>
                            <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Toys">Toys</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Home">Home</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Fashion">Fashion</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="Lowtohigh">Price: Low to High</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Hightolow">Price: Hign to Low</NavDropdown.Item>
                        </NavDropdown>
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

export default Navigationbar;