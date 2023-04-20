import "../SignIn/SignIn.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";

function SignUp() {
  return (
    <>
      <div className="sign-bg">
        <Form className="sign-box">
          <Form.Text className="form-title">Register</Form.Text>
          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3 inp" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3 inp"
              controlId="formBasicConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit" className="sign-btn">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
