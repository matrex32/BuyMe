import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Header component for the application.
 * 
 * This component displays the navigation bar at the top of the page.
 * It includes links for navigating to different parts of the application
 * and a logout option for authenticated users.
 */
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();

    /**
     * Handles the logout process.
     * 
     * Clears the local storage and navigates the user to the registration page.
     */
    function logOut() {
        localStorage.clear();
        navigate("/register");
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
                    <Nav className="ms-auto" style={{ marginRight: '60px' }}>
                        <NavDropdown title={user.name}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                )}
            </Navbar>
        </div>
    );
}

export default Header;
