import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Section3 = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price according to Egypt" />
        </Form.Group>
        <div className="createAd-flex">
          <div>
            <Form.Label>Payment rate</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">One-time Payment</option>
              <option value="2">Per Day</option>
              <option value="3">Per Month</option>
              <option value="4">Per 3 Month</option>
              <option value="5">Per 6 Month</option>
            </Form.Select>
          </div>
          <div>
            <Form.Label>Period of availability</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Unlimited</option>
              <option value="2">limited</option>
            </Form.Select>
          </div>
        </div>
        <Form.Group>
          <Form.Label>Availability details</Form.Label>
          <FloatingLabel
              className="createAd-textarea"
              controlId="floatingTextarea2"
              label="more details about pricing "
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "90px" }}
              />
            </FloatingLabel>
        </Form.Group>
      </Form>
    </>
  );
};
export default Section3;
