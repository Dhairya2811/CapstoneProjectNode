import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
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
    const [searchShow, setSearchShow] = useState(false);
    const [username, setUserName] = useState();
    const [blocked, setBlocked] = useState();
    const [admin, setAdmin] = useState();

    var site_logo = images.name_logo;
    var theme_color= "#003A56";
    var returnNav;
    var rightSide;
    var location = useLocation();

    useEffect(()=>{
        var path = window.location.pathname;
        var pathArr = window.location.pathname.split("/");
    
        var user = JSON.parse(sessionStorage.getItem("user"));
        setUserName(user != null ? user.username : null);
        setBlocked(user != null ? user.blocked : null);
        setAdmin(user != null ? user.admin : null);
        if(path == "/" || path == "/myItems" || path == "/myCart"){
            setCategoryShow(true);
            setSearchShow(true);
        }else if(pathArr[1] == "UsersAndData"){
            setCategoryShow(false);
            setSearchShow(true);
        }else if(pathArr[1] == "category"){
            setSearchShow(false);
            setCategoryShow(true);
        }else if(pathArr[1] == "search"){
            setSearchShow(true);
            setCategoryShow(false);
        }
        else{
            setSearchShow(false);
            setCategoryShow(false);
        }
    }, [location]);

    var onDropDown = (e)=>{
        var path = window.location.pathname;
        var pathArr = window.location.pathname.split("/");
        if(pathArr[1] == "category" || path == "/"){
            window.location.href = "/category/"+e;
        }
        else{
            window.location.pathname = pathArr[1]+"/category/"+e;
        }
    };
    var searchItem = (event)=>{
        var search = document.getElementById("search_NavbarFormInput");
        
        var search_by = search.value;
        var path = window.location.pathname;
        var pathArr = window.location.pathname.split("/");
        if(pathArr[1] == "search" || path == "/"){
            window.location.href = "/search/"+search_by;
        }
        else{
            window.location.pathname = pathArr[1]+"/search/"+search_by;
        }
        event.preventDefault();
    };
    var logout = ()=>{
        sessionStorage.removeItem("user");
        window.location.href = "/";
    }

    var showChange = ()=>setShow(!show);
    
    // display the Navlinks as per sign in status
    if(username === null){
        returnNav = <Nav id="NavbarBody" className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/" onClick={showChange}>Home</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/register" onClick={showChange} >Register</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem"  as={NavLink} to="/signin" onClick={showChange}>Sign In</Nav.Link>
            {categoryShow == true ? 
            <NavDropdown title="Category" className="NavbarLink NavFonts" onSelect={onDropDown} id='offcanvasNavbarDropdown-expand-true' style={{fontSize: "large"}}>
                <NavDropdown.Item  className="NavFonts NavbarLink Navitem" eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Toys">Toys</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Home">Home</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Divider style={{color: "#E8F0F4"}}/>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Lowtohigh">Price: Low to High</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Hightolow">Price: Hign to Low</NavDropdown.Item>
            </NavDropdown> : <></>}
        </Nav>;
        rightSide = <></>
    }else{
        returnNav = <Nav id="NavbarBody" className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/" onClick={showChange}>Home</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/myItems" onClick={showChange} disabled={blocked == 1}>My Item</Nav.Link>
            <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/addItem" onClick={showChange} disabled={blocked == 1}>Add Item</Nav.Link>
            {admin == true ? 
            <>
                <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/postad" onClick={showChange}>Post Ad</Nav.Link>
                <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/higestSale" onClick={showChange}>Higest Sale</Nav.Link>
                <Nav.Link className="NavFonts NavbarLink Navitem" as={NavLink} to="/UsersAndData" onClick={showChange}>Users and Data</Nav.Link>
            </> : <></>}
            {/* <Nav.Link as={NavLink} to="#" onClick={logout}>Log Out</Nav.Link> */}
            {categoryShow == true ? 
            <NavDropdown title="Category" className="NavbarLink NavFonts" onSelect={onDropDown} id='offcanvasNavbarDropdown-expand-true' style={{fontSize: "large"}}>
                <NavDropdown.Item  className="NavFonts NavbarLink Navitem" eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Toys">Toys</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Home">Home</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Divider style={{color: "#E8F0F4"}}/>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Lowtohigh">Price: Low to High</NavDropdown.Item>
                <NavDropdown.Item className="NavFonts NavbarLink Navitem" eventKey="Hightolow">Price: Hign to Low</NavDropdown.Item>
            </NavDropdown> : <></>}
        </Nav>
        rightSide=<NavDropdown id="username_Dropdown" title={username} className="NavFonts">
            <NavDropdown.Item className="username_Dropdown_items NavFonts" id="myCart" as={NavLink} to="/myCart"  disabled={blocked == 1}>My Cart</NavDropdown.Item>
            <NavDropdown.Divider style={{color: "#003A56"}}/>
            <NavDropdown.Item className="username_Dropdown_items NavFonts" id="logout" onClick={logout} >Log Out</NavDropdown.Item>
        </NavDropdown>
    }

    return (
        <>
            <Navbar variant="dark" id="Navbar" expand='true' className="mb-3" style={{backgroundColor: theme_color, fontFamily: "Nunito"}}>
                <div id="NavBar_leftside">
                    {/* menu button */}
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
                    
                        <div id="name_form"> 
                            <Navbar.Brand as={NavLink} to="/" ><img className = "navbar_image" src={site_logo}/></Navbar.Brand>
                            {searchShow == true ?
                                <Form className="d-flex" id="navbar_search_form" onSubmit={searchItem}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        id="search_NavbarFormInput"
                                    />
                                    <Button className="btn" id="search_NavbarFormBtn" onClick={searchItem}><i className="fa fa-search"></i></Button>
                                </Form> :
                            <></> }
                        </div>
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