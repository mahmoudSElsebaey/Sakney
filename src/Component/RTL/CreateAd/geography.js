import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const GeographyAd = () => {
return (
<>
<Form>
<Form.Label>المدينة</Form.Label>
<Form.Select aria-label="Default select example bg-info">
<option>اختر المدينة</option>
<option value="1">المنوفية</option>
<option value="2">القاهرة</option>
<option value="3">الإسكندرية</option>
<option value="4">أسوان</option>
<option value="5">الفيوم</option>
<option value="6">الإسماعيلية</option>
<option value="7">مطروح</option>
<option value="8">قنا</option>
<option value="9">السويس</option>
<option value="10">سوهاج</option>
</Form.Select>
<Form.Group className="mb-3">
<Form.Label>العنوان</Form.Label>
<Form.Control type="text" placeholder="ادخل العنوان"/>
</Form.Group>
<Form.Group>
<Form.Label>ملاحظات حول العنوان/المبنى/الحي</Form.Label>
<FloatingLabel
         className="createAd-textarea"
         controlId="floatingTextarea2"
         label="المزيد من التفاصيل حول العنوان"
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
export default GeographyAd;