import React from "react";
import { Form } from "react-bootstrap";

const ContactAd = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <div className="createAd-flex mb-3">
          <div>
            <Form.Group className="w-100">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone number"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="w-100">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter mobile number"
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="createAd-flex mb-5">
          <div>
            <Form.Group className="w-100">
              <Form.Label>Fax number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter fax number"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="w-100">
              <Form.Label>National ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter national id"
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
