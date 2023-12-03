import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
    let user =  JSON.parse(localStorage.getItem('user-info'))
    const navigate=useNavigate()

    function logOut() {
        localStorage.clear()
        navigate("/register")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">BuyMe</Navbar.Brand>
                <Nav className="mr-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/">Product List</Link>
                            <Link to="/add">Add Products</Link>
                            <Link to="/update">Update Products</Link>
                            <Link to="/search">Search Products</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }

                </Nav>
                {user && (
                    <Nav className="ms-auto"  style={{ marginRight: '60px' }}>
                        <NavDropdown title={user.name}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                )}
            </Navbar>
        </div>
    )
}

export default Header;