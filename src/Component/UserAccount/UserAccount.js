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
            My Account
          </h2>
          <div className="user-box">
            <div className="user-img">
              <img src={userImg} alt="user" title="user" />
              <p>{localStorage.getItem("username")}</p>
            </div>
            <div className="user-content">
              <Form.Group className="form-group">
                <Form.Label>email</Form.Label>
                <Form.Label style={{ textTransform: "none" }}>
                  {userData.email}
                </Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>age</Form.Label>
                <Form.Label>{userData.age} years</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>city</Form.Label>
                <Form.Label>{userData.city}</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>university</Form.Label>
                <Form.Label>{userData.university}</Form.Label>
                <i className="fas fa-edit" onClick={editUserInfo}></i>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>phone</Form.Label>
                <Form.Label>+2{userData.phone}</Form.Label>
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
                  sign out
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
