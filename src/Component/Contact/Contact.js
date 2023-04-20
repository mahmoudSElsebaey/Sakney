import React from "react";
import "./Contact.css";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import Header from "../Header/Header";

function Contact() {
  return (
    <>
     {/* <Header/> */}
      <section className="container row contact-section ">
        {/* <p className="title-section">Contact Us</p> */}
        <div className="contact-parent col-lg-8 col-md-12 ">
          <Form>
            <div className="contact-fullname">
              <Form.Group className="mb-3 w-50 m-1" controlId="formBasicFname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Form.Group className="mb-3 col-6 m-1" controlId="formBasicLname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" className="form-control" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" className="form-control" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
              <Form.Label>Message</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <Button variant="" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
        <div className="contact-parent-right col-lg-3 col-md-12">
          <div className="contact-info col-lg-12 col-md-3 col-sm-12">
            <div>
              <h3>Address</h3>
              <span>
                <i className="fas fa-map-marker-alt"></i> 22 salem salah St.
                Shbin Elkom, Menoufia, Egypt
              </span>
            </div>
            <div>
              <h3>Phone</h3>
              <span className="contact-phone">
                <Link href="#">
                  <i className="fas fa-phone-volume"></i> 5486357
                </Link>
                <Link href="#">
                  <i className="fas fa-mobile-alt"></i> 01201101099
                </Link>
              </span>
            </div>
            <div>
              <h3>Email</h3>
              <Link href="#" className="contact-email">
                <i className="fas fa-envelope"></i> youremail@domain.com
              </Link>
            </div>
          </div>
          <div className="contact-more-info  col-lg-12 col-md-3 col-sm-12">
            <h3>More Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad
              iure porro mollitia architecto hic consequuntur. Distinctio nisi
              perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui,
              libero neque sed nulla.
            </p>
            <button className="btn text-white">More Info</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
