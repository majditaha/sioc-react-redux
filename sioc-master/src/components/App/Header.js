import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import SiocLogoHead from './../../../public/images/siocLogoHead.png';

const Header = () => (
    <header>
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">
                        <img className="sioc-logo" src={SiocLogoHead} alt="sioc.com.ar"/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem className="menu-underline" eventKey={1} href="#search">Buscar</NavItem>
                    <NavItem className="menu-underline" eventKey={2} href="#intro">El sioc</NavItem>
                    <NavItem className="menu-underline" eventKey={3} href="/back.html">Administrador</NavItem>
                    <NavItem className="menu-underline" eventKey={4} href="/signIn">Ingresar</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;
