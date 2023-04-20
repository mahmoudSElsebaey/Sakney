import React from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoImg from "../../../images/Sakney3.jpg";
import { NavLink, Link, Outlet } from "react-router-dom";

function Navbar_Ar() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          // bg="light"
          expand={expand}
          className="mb-3 sticky-top navbar-style"
          dir="RTL"
        >
          <Container fluid>
            <Navbar.Brand as={NavLink} to="" className="navbar-logo">
              <img src={logoImg} alt="logo image" title="Sakney" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav-links flex-grow-1 pe-3 ">
                  <Nav.Link as={NavLink} to="">
                    الرئيسية
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="apartments">
                  الوحدات السكنية
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="about">
                     عنا
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="contact">
                    للتواصل معنا
                  </Nav.Link>
                </Nav>
                <Form className="d-flex nav-right">
                  <Nav className="nav-links justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={NavLink} to="signin" id="SignInBtn">
                      تسجيل الدخول
                    </Nav.Link>
                    {/* <span>|</span> */}
                    <Nav.Link as={NavLink} to="signup" id="SignUpBtn">
                      انشاء حساب
                    </Nav.Link>
                  </Nav>
                  <Button
                    variant="outline-primary"
                    className="nav-btn-search"
                    as={Link}
                    to="search"
                  >
                    بحث
                  </Button>
                </Form>
                <Button
                  variant="danger"
                  className="nav-btn-add-ads mx-2"
                  as={NavLink}
                  to="createAd"
                >
                  <i className="fas fa-plus text-white"></i>
                  <span className="text-white"> اضافة اعلان</span>
                </Button>
                {/* <div className="nav-dd">add</div> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
}

export default Navbar_Ar;
