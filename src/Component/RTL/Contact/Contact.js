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
      <section className="container row contact-section " dir="rtl">
        {/* <p className="title-section">Contact Us</p> */}
        <div className="contact-parent col-lg-8 col-md-12">
          <Form dir="rtl">
            <div className="contact-fullname">
              <Form.Group className="mb-3 w-50 m-1" controlId="formBasicFname">
                <Form.Label>الاسم الاول</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Form.Group className="mb-3 col-6 m-1" controlId="formBasicLname">
                <Form.Label>الاسم الاخير</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>عنوان الايميل</Form.Label>
              <Form.Control type="email" className="form-control" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>الموضوع</Form.Label>
              <Form.Control type="text" className="form-control" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
              <Form.Label>الرسالة</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="التعليقات">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <Button variant="" type="submit">
              إرسال
            </Button>
          </Form>
        </div>
        <div className="contact-parent-right contact-parent-right-Ar col-lg-3 col-md-12">
          <div className="contact-info col-lg-12 col-md-3 col-sm-12" dir="rtl">
            <div>
              <h3>العنوان</h3>
              <span>
                <i className="fas fa-map-marker-alt"></i> مصر , المنوفية ,مركز
                شبين الكوم , 22 شارع سالم صلاح
              </span>
            </div>
            <div>
              <h3>أرقام الهواتف</h3>
              <span className="contact-phone contact-phone-Ar">
                <Link href="#">
                  <i className="fas fa-phone-volume"></i> 5486357
                </Link>
                <Link href="#">
                  <i className="fas fa-mobile-alt"></i> 01201101099
                </Link>
              </span>
            </div>
            <div>
              <h3>الايميل</h3>
              <Link href="#" className="contact-email">
                <i className="fas fa-envelope"></i> youremail@domain.com
              </Link>
            </div>
          </div>
          <div
            className="contact-more-info  contact-more-info-Ar col-lg-12 col-md-3 col-sm-12"
            dir="rtl"
          >
            <h3> المزيد من معلومات </h3>
            <p>
              يمكنك ارسال رساله توضح فيها وجهة نظرك عن موقعنا الاكتروني او
              للاستفسار عن عطل او مشكله في الموقع تواجهك عند الاستخدام برجاء
              التواصل مع خدمة العملاء من خلال وسائل التواصل الموجوده علي الموقع
            </p>
            <button className="btn text-white">المزيد</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
