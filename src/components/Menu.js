import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => (
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                SKLD
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/products">
                    <NavItem>Products</NavItem>
                </LinkContainer>
                <LinkContainer to="/customers">
                    <NavItem>Customers</NavItem>
                </LinkContainer>
                <NavDropdown title="User" id="user-dropdown">
                    <LinkContainer to="/user/overview">
                        <MenuItem>Users Overview</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/user/create">
                        <MenuItem>Create User</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/user/modify">
                        <MenuItem>Modify User</MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;
