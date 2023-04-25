import "../SignIn/SignIn.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";

// let username = document.querySelector(".usernameUp"),
// email = document.querySelector(".emailUp"),
//   password = document.querySelector(".passwordUp"),
//   confirmPassword = document.querySelector(".confirmPasswordUp");

function SignUp() {
  const checkData = (e) => {
    e.preventDefault();
    if (
      document.querySelector(".usernameUp").value === "" ||
      document.querySelector(".emailUp").value === "" ||
      document.querySelector(".passwordUp").value === "" ||
      document.querySelector(".confirmPasswordUp").value === ""
    ) {
      window.alert("Please fill all data");
    } else {
      localStorage.setItem(
        "username",
        document.querySelector(".usernameUp").value
      );
      localStorage.setItem("email", document.querySelector(".emailUp").value);
      localStorage.setItem(
        "password",
        document.querySelector(".passwordUp").value
      );
      localStorage.setItem(
        "confirmPassword",
        document.querySelector(".confirmPasswordUp").value
      );
      setTimeout(() => {
        window.location = "signin";
      }, 1000);
    }
  };

  return (
    <>
      <div className="sign-bg">
        <Form className="sign-box">
          <Form.Text className="form-title">Register</Form.Text>
          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                className="usernameUp"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3 inp" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="emailUp"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="passwordUp"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 inp"
              controlId="formBasicConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                className="confirmPasswordUp"
                placeholder="Confirm password"
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="sign-btn"
            onClick={checkData}
          >
            Register
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
