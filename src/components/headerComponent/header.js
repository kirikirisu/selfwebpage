import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaYoutube, FaTwitter, FaPiggyBank } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const Header = () => (
  <Navbar bg="light" expand="lg" variant="light">
    <Navbar.Brand className="mb-1" href="https://unsplash.com/search/photos/pig"><FaPiggyBank /></Navbar.Brand>
    <Navbar.Brand className="ml-2">Arakappa</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="ml-2" id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
        <LinkContainer to="/Work"><Nav.Link>Products</Nav.Link></LinkContainer>
        <NavDropdown title="Hobby" id="nav-dropdown">
          <LinkContainer to="/Game"><NavDropdown.Item>GAME</NavDropdown.Item></LinkContainer>
          <LinkContainer to="/"><NavDropdown.Item>CODING</NavDropdown.Item></LinkContainer>
          <LinkContainer to="/Work"><NavDropdown.Item>DTM</NavDropdown.Item></LinkContainer>
        </NavDropdown>
      </Nav>
      <Nav className="pr-2">
        <Nav.Item><FaTwitter /></Nav.Item>
        <Nav.Item className="ml-4"><FaYoutube /></Nav.Item>
        <Nav.Item className="ml-4"><GoMarkGithub /></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
