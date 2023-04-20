import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <div className="sign-bg">
        <Form className="sign-box" dir="rtl">
          <Form.Text className="form-title">تسجيل الدخول</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> البريد الإلكتروني</Form.Label>
            <Form.Control
              type="text"
              placeholder="ادخل البريد الإلكتروني"
            />
            <Form.Text className="text-muted" style={{fontSize:'smaller'}}>
              لن نشارك بريدك الإلكتروني مع أي شخص آخر.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control type="password" placeholder="ادخل كلمة المرور" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox" dir="ltr">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className="sign-btn">
            إرسال
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
