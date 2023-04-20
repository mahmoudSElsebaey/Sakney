import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const GeographyAd = () => {
  return (
    <>
      <Form>
        <Form.Label>City</Form.Label>
        <Form.Select aria-label="Default select example bg-info">
          <option>Select the City</option>
          <option value="1">Monufia</option>
          <option value="2">Cairo</option>
          <option value="3">Alexandria</option>
          <option value="4">Aswan</option>
          <option value="5">Faiyum</option>
          <option value="6">Ismailia</option>
          <option value="7">Matrouh</option>
          <option value="8">Qena</option>
          <option value="9">Suez</option>
          <option value="10">Sohag</option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes about Address / Building / Neighborhood</Form.Label>
          <FloatingLabel
            className="createAd-textarea"
            controlId="floatingTextarea2"
            label="more details about address"
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
export default GeographyAd;
