import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";
import "./SignIn.css";

function SignIn() {
  // let getUsername = localStorage.getItem("username");
  // let getPassword = localStorage.getItem("password");

  const checkDataSignIn = (e) => {
    e.preventDefault();
    if (
      document.querySelector(".usernameIn").value === "" ||
      document.querySelector(".passwordIn").value === ""
    ) {
      window.alert("please fill data");
    } else {
      if (
        localStorage.getItem("username") &&
        localStorage.getItem("username").trim() ===
          document.querySelector(".usernameIn").value &&
        localStorage.getItem("password") &&
        localStorage.getItem("password").trim() ===
          document.querySelector(".passwordIn").value
      ) {
        setTimeout(() => {
          window.location = "/Sakney";
        }, 1000);
      } else {
        window.alert("data is wrong");
      }
    }
  };

  return (
    <>
      <div className="sign-bg">
        <Form className="sign-box" dir="rtl">
          <Form.Text className="form-title">تسجيل الدخول</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> البريد الإلكتروني</Form.Label>
            <Form.Control
              type="text"
              className="usernameIn"
              placeholder="ادخل البريد الإلكتروني"
            />
            <Form.Text className="text-muted" style={{ fontSize: "smaller" }}>
              لن نشارك بريدك الإلكتروني مع أي شخص آخر.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control
              type="password"
              className="passwordIn"
              placeholder="ادخل كلمة المرور"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox" dir="ltr">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="sign-btn"
            onClick={checkDataSignIn}
          >
            إرسال
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
