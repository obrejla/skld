import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => (
    <Navbar inverse fixedTop collapseOnSelect>
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
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/logout">
                    <NavItem>Logout</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;
