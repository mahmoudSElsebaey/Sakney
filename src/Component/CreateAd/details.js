import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Details = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Ad Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <div className="createAd-flex">
          <div>
            <Form.Label>Ad Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Shared Residence</option>
              <option value="2">Co-Working space</option>
            </Form.Select>
          </div>
          <div>
            <Form.Label>Accommodation type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Any</option>
              <option value="1">Room</option>
              <option value="2">BHK</option>
              <option value="3">Bedspace</option>
              <option value="4">Studio flat</option>
              <option value="5">Partition</option>
            </Form.Select>
          </div>
        </div>
        <Form.Group>
          <Form.Label>Detailed description</Form.Label>
          <FloatingLabel
            className="createAd-textarea"
            controlId="floatingTextarea2"
            label="more details about accommodation "
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "90px" }}
            />
          </FloatingLabel>
          {/* <Form.Control as="textarea" className="createAd-textarea"  label="Comments" /> */}
        </Form.Group>
      </Form>
    </>
  );
};
export default Details;
