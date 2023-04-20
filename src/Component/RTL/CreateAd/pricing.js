import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Section3 = () => {
return (
<>
<Form>
<Form.Group className="mb-3">
<Form.Label>السعر</Form.Label>
<Form.Control type="number" placeholder="السعر حسب مصر" />
</Form.Group>
<div className="createAd-flex">
<div>
<Form.Label>طريقة الدفع</Form.Label>
<Form.Select aria-label="Default select example">
<option value="1">الدفعة الواحدة</option>
<option value="2">يومياً</option>
<option value="3">شهرياً</option>
<option value="4">كل 3 شهور</option>
<option value="5">كل 6 شهور</option>
</Form.Select>
</div>
<div>
<Form.Label>فترة التوافر</Form.Label>
<Form.Select aria-label="Default select example">
<option value="1">غير محدود</option>
<option value="2">محدود</option>
</Form.Select>
</div>
</div>
<Form.Group>
<Form.Label>تفاصيل التوافر</Form.Label>
<FloatingLabel
           className="createAd-textarea"
           controlId="floatingTextarea2"
           label="المزيد من التفاصيل حول السعر"
         >
<Form.Control
as="textarea"
placeholder="اترك تعليقاً هنا"
style={{ height: "90px" }}
/>
</FloatingLabel>
</Form.Group>
</Form>
</>
);
};
export default Section3;