import React, { useState } from "react";
import "./UserAccount.css";
import { Button, Form } from "react-bootstrap";
import userImg from "./user2.jpg";
import Footer from "../Footer/Footer";

const UserAccount = () => {
  const [userData] = useState({
    email: localStorage.getItem("email"),
    age: localStorage.getItem("age"),
    city: localStorage.getItem("city"),
    university: localStorage.getItem("university"),
    phone: localStorage.getItem("phone"),
  });
  const editUserInfo = () => {
    setTimeout(() => {
      window.location = "signup";
    }, 1000);
  };
  return (
    <>
      <div className="sign-bg">
        <div className="search-box">
          <h2 className="form-title" style={{ letterSpacing: "2px" }}>
            حسابي
          </h2>
          <div className="user-box" dir="rtl">
            <div className="user-img">
              <img src={userImg} alt="user" title="user" />
              <p>{localStorage.getItem("username")}</p>
            </div>
            <div className="user-content">
              <Form.Group className="form-group">
                <Form.Label className="label-ar">البريد الإلكتروني</Form.Label>
                <Form.Label className="label-ar" style={{ textTransform: "none" }}>
                  {userData.email}
                </Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="label-ar">العمر</Form.Label>
                <Form.Label className="label-ar">{userData.age} سنة</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="label-ar">المدينة</Form.Label>
                <Form.Label className="label-ar">{userData.city}</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="label-ar">الجامعة</Form.Label>
                <Form.Label className="label-ar">{userData.university}</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="label-ar">الهاتف</Form.Label>
                <Form.Label className="label-ar" dir="ltr">+2{userData.phone}</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="mt-4">
                <Button
                  className="btn-danger d-block"
                  style={{ marginLeft: "auto" }}
                  onClick={() => {
                    localStorage.clear();
                    setTimeout(() => {
                      window.location = "signup";
                    }, 1000);
                  }}
                >
                  تسجيل الخروج
                </Button>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserAccount;
