import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Details = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label style={{textAlign:'right'}}>عنوان الإعلان</Form.Label>
          <Form.Control type="text" placeholder="العنوان" />
        </Form.Group>

        <div className="createAd-flex">
          <div>
            <Form.Label>نوع الإعلان</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">مسكن مشترك</option>
              <option value="2">مساحة مشتركة للعمل</option>
            </Form.Select>
          </div>
          <div>
            <Form.Label>نوع السكن</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>أي</option>
              <option value="1">غرفة</option>
              <option value="2">شقة غرفة نوم وصالة ومطبخ</option>
              <option value="3">مكان في غرفة مشتركة</option>
              <option value="4">شقة استوديو</option>
              <option value="5">جزء من الغرفة</option>
            </Form.Select>
          </div>
        </div>
        <Form.Group>
          <Form.Label>وصف مفصل</Form.Label>
          <FloatingLabel
            className="createAd-textarea"
            controlId="floatingTextarea2"
            label="مزيد من التفاصيل حول السكن"
          >
            <Form.Control
              as="textarea"
              placeholder="اترك تعليق هنا"
              style={{ height: "90px" }}
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
    </>
  );
};
export default Details;
