import React from "react";
import { Link } from "react-router-dom"; 
//import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){

    return(
        /*<Navbar style={{background:"#9fc6c6"}} expand="lg">
        <Navbar.Brand href="/">First React project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Modules" id="basic-nav-dropdown">
                <NavDropdown.Item href="/dropmenu1">Cost Allocation(react grid)</NavDropdown.Item>
                <NavDropdown.Item href="./dropmenu2">Cost Allocation(ag-grid)</NavDropdown.Item>
                <NavDropdown.Item href="./dropmenu3">Drop menu 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Drop menu 4">Drop menu 4 -Separated</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>*/
        <div className="header" style={{textAlign:"left"}}>
            <div style={{ display:"inline-block",paddingLeft:"10px",paddingRight:"20px",paddingTop:"10px"}}> <h6>First React project</h6></div>
            <div style={{ display:"inline-block",paddingTop:"0px", position:"fixed"}}>
                <ul className="nav">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><a href="#">Modules</a>
                        <ul>
                            <Link to={"/costAllocation"}>Cost allocation</Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        /*<Nav pullRight>
        <Nav.Link href="/" disabled>Logout</Nav.Link>
        </Nav>
        </Navbar>*/
    )
}

export default Header;