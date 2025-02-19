import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaBell } from 'react-icons/fa';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <Navbar  className="custom-navbar px-3" expand="lg">
      <Container>
        <Row className="w-100">
          <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#">CompanyLogo</Navbar.Brand>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Select City
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">New York</Dropdown.Item>
                <Dropdown.Item href="#">London</Dropdown.Item>
                <Dropdown.Item href="#">Paris</Dropdown.Item>
                <Dropdown.Item href="#">Tokyo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-between align-items-center mt-2 mt-md-0">
            <Form className="search-bar flex-grow-1 me-3">
              <FormControl type="search" placeholder="Search" />
            </Form>
            <Nav className="icons d-flex gap-3">
              <Nav.Link href="#" className="d-flex align-items-center"><FaHeart size={20} style={{color:'white'}} /></Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center"><FaBell size={20} style={{color:'white'}} /></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;