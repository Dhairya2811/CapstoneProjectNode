import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import images from './images.json';
import { useState, useEffect } from "react";



var Navigationbar = ()=>{
    const [show, setShow] = useState(false);
    const [categoryShow, setCategoryShow] = useState(false);
    var site_logo = images.name_logo;
    var theme_color= "#003A56";
    var username = sessionStorage.getItem("username");
    var returnNav;
    var rightSide;

    useEffect(()=>{
        var path = window.location.pathname;
        if(path == "/" || path == "/myItems" || path == "/myCart"){setCategoryShow(true)}
        else{setCategoryShow(false)}
    }, [window.location.pathname]);

    var onDropDown = (e)=>{
        var path = window.location.pathname;
        var pathArr = window.location.pathname.split("/");
        if(pathArr[1] == "category" || path == "/"){
            console.log(path);
            window.location.href = "/category/"+e;
        }
        else{
            window.location.pathname = pathArr[1]+"/category/"+e;
        }
    };
    var logout = ()=>{
        sessionStorage.removeItem("username");
        window.location.href = "/";
    }

    var showChange = ()=>setShow(!show);
    
    // display the Navlinks as per sign in status
    if(username === null){
        returnNav = <Nav id="NavbarBody" className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/" onClick={showChange}>Home</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/register" $font-family="Nunito" onClick={showChange} >Register</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem"  as={NavLink} to="/signin" onClick={showChange}>Sign In</Nav.Link>
            {categoryShow == true ? 
            <NavDropdown title="Category" className="NavbarLink NavFonts" onSelect={onDropDown}             id='offcanvasNavbarDropdown-expand-true' style={{fontSize: "large"}}>
                <NavDropdown.Item  className="NavFonts NavbarLink Navitem" eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Toys">Toys</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Home">Home</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Divider style={{color: "white"}}/>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Lowtohigh">Price: Low to High</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Hightolow">Price: Hign to Low</NavDropdown.Item>
            </NavDropdown> : <></>}
        </Nav>;
        rightSide = <></>
    }else{
        returnNav = <Nav id="NavbarBody" className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/" onClick={showChange}>Home</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/myItems" onClick={showChange}>My Item</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/addItem" onClick={showChange}>Add Item</Nav.Link>
            {/* <Nav.Link as={NavLink} to="#" onClick={logout}>Log Out</Nav.Link> */}
            {categoryShow == true ? 
            <NavDropdown title="Category" className="NavbarLink NavFonts" onSelect={onDropDown}             id='offcanvasNavbarDropdown-expand-true' style={{fontSize: "large"}}>
                <NavDropdown.Item  className="NavFonts NavbarLink Navitem" eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Toys">Toys</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Home">Home</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Divider style={{color: "white"}}/>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Lowtohigh">Price: Low to High</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Hightolow">Price: Hign to Low</NavDropdown.Item>
            </NavDropdown> : <></>}
        </Nav>
        rightSide=<NavDropdown id="username_Dropdown" title={username} className="NavFonts">
            <NavDropdown.Item className="username_Dropdown_items NavFonts"
            id="logout" onClick={logout} >Log Out</NavDropdown.Item>
            <NavDropdown.Item className="username_Dropdown_items NavFonts" id="myCart" as={NavLink} to="/myCart" $font-family="Nunito" >My Cart</NavDropdown.Item>
        </NavDropdown>
    }

    return (
        <>
            <Navbar variant="dark" id="Navbar" expand='true' className="mb-3" style={{backgroundColor: theme_color, fontFamily: "Nunito"}}>
                <div id="NavBar_leftside">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-true`} id="navbar_menubtn" onClick={showChange}/>
                    {/* Off Canvas  */}
                    <Navbar.Offcanvas show={show}
                    id={`offcanvasNavbar-expand-true`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-true`}
                    style={{backgroundColor: theme_color}} onHide={showChange}
                    >
                        <Offcanvas.Header closeButton closeVariant="white" className="navbar_offcanvas" >
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-true`}>
                            {/* add the my store logo */}
                            <Navbar.Brand as={NavLink} to="/"><img className = "navbar_image" src={site_logo} /></Navbar.Brand>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    {/* this is body of side screen */}
                    <Offcanvas.Body>
                        {returnNav}
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    
                    {/* add the my store logo */}
                    <Navbar.Brand as={NavLink} to="/"><img className = "navbar_image"  src={site_logo} /></Navbar.Brand>
                    <Form className="d-flex" id="navbar_search_form">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            id="search_NavbarFormInput"
                        />
                        <Button className="btn" id="search_NavbarFormBtn"><i class="fa fa-search"></i></Button>
                    </Form>
                </div>
                <div id="NavBar_rightside">
                    <div>
                        {rightSide}
                    </div>
                </div>
            </Navbar>
        </>
    );
};

export default Navigationbar;