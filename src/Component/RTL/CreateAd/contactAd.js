import React from "react";
import { Form } from "react-bootstrap";

const ContactAd = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>البريد الإلكتروني</Form.Label>
          <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" />
        </Form.Group>
        <div className="createAd-flex mb-3">
          <div>
            <Form.Group className="w-100">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                type="number"
                placeholder="أدخل رقم الهاتف"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="w-100">
              <Form.Label>رقم الجوال</Form.Label>
              <Form.Control
                type="number"
                placeholder="أدخل رقم الجوال"
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="createAd-flex mb-5">
          <div>
            <Form.Group className="w-100">
              <Form.Label>رقم الفاكس</Form.Label>
              <Form.Control
                type="number"
                placeholder="أدخل رقم الفاكس"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="w-100">
              <Form.Label>الرقم الوطني</Form.Label>
              <Form.Control
                type="number"
                placeholder="أدخل الرقم الوطني"
                required
              />
            </Form.Group>
          </div>
        </div>
      </Form>
    </>
  );
};
export default ContactAd;
