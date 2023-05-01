import React, { useEffect } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoImg from "../../images/Sakney3.jpg";
import { NavLink, Link, Outlet } from "react-router-dom";

function NavbarMain() {
  useEffect(() => {
    if (localStorage.getItem("username")) {
      const navLinks = document.querySelector("#navLinks");
      if (navLinks) navLinks.remove();

      const navUser = document.querySelector("#navUser");
      if (navUser) navUser.style.display = "block";

      const user = document.querySelector("#user");
      if (user) user.innerHTML = localStorage.getItem("username");
    }
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          // bg="light"
          expand={expand}
          className="mb-3 sticky-top navbar-style"
        >
          <Container fluid>
            <Navbar.Brand
              as={NavLink}
              to=""
              className="navbar-logo"
              onClick={handleLinkClick}
            >
              <img src={logoImg} alt="logo" title="Sakney" />
              {/* <img src="../../images/Sakney3.jpg" alt="logo image" title="Sakney" /> */}
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
                <Nav className=" flex-grow-1 pe-3 nav-links">
                  <Nav.Link as={NavLink} to="" onClick={handleLinkClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="apartments"
                    onClick={handleLinkClick}
                  >
                    apartments
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="about" onClick={handleLinkClick}>
                    About
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="contact" onClick={handleLinkClick}>
                    Contact
                  </Nav.Link>
                </Nav>
                <Form className="d-flex nav-right">
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3 nav-links"
                    id="navLinks"
                  >
                    <Nav.Link
                      as={NavLink}
                      to="signin"
                      id="SignInBtn"
                      onClick={handleLinkClick}
                    >
                      Sign In
                    </Nav.Link>
                    {/* <span>|</span> */}
                    <Nav.Link
                      as={NavLink}
                      to="signup"
                      id="SignUpBtn"
                      onClick={handleLinkClick}
                    >
                      Sign Up
                    </Nav.Link>
                  </Nav>
                  {/* User Account */}
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3 nav-links"
                    id="navUser"
                    style={{
                      display: "none",
                    }}
                  >
                    <Nav.Link as={NavLink} to="my-account">
                      <i className="fas fa-user p-1"></i>
                      <span id="user"></span>
                    </Nav.Link>
                  </Nav>
                  <Button
                    variant="outline-primary"
                    className="nav-btn-search"
                    as={Link}
                    to="search"
                    id="btnSearch"
                    onClick={handleLinkClick}
                  >
                    <i className="fas fa-search"></i> Search
                  </Button>
                </Form>
                <Button
                  variant="danger"
                  className="nav-btn-add-ads mx-2"
                  as={NavLink}
                  to="createAd"
                  id="btnAddAds"
                  onClick={handleLinkClick}
                >
                  <i className="fas fa-plus text-white"></i>
                  <span className="text-white"> create Ad</span>
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
}

export default NavbarMain;
