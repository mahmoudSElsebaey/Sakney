import "../SignIn/SignIn.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";

function SignUp() {
  return (
    <>
      <div className="sign-bg">
        <Form className="sign-box" dir="rtl">
          <Form.Text className="form-title">انشاء حساب</Form.Text>
          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicUsername">
              <Form.Label>اسم المستخدم</Form.Label>
              <Form.Control type="text" placeholder="ادخل اسم المستخدم" />
            </Form.Group>
            <Form.Group className="mb-3 inp" controlId="formBasicEmail">
              <Form.Label> البريد الإلكتروني</Form.Label>
              <Form.Control type="text" placeholder="ادخل البريد الإلكتروني" />
              <Form.Text className="text-muted" style={{ fontSize: "smaller" }}>
                لن نشارك بريدك الإلكتروني مع أي شخص آخر.
              </Form.Text>
            </Form.Group>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicPassword">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control type="password" placeholder="ادخل كلمة المرور" />
            </Form.Group>
            <Form.Group
              className="mb-3 inp"
              controlId="formBasicConfirmPassword"
            >
              <Form.Label>تأكيد كلمة المرور</Form.Label>
              <Form.Control type="password" placeholder="تأكيد كلمة المرور" />
            </Form.Group>
          </Form.Group>
          <Form.Group
            className="mb-3 mx-2"
            controlId="formBasicCheckbox"
            dir="ltr"
          >
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

export default SignUp;
