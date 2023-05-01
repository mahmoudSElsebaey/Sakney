import "../SignIn/SignIn.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";

function SignUp() {
  const checkData = (e) => {
    e.preventDefault();
    if (
      document.querySelector(".usernameUp").value === "" ||
      document.querySelector(".emailUp").value === "" ||
      document.querySelector(".passwordUp").value === "" ||
      document.querySelector(".confirmPasswordUp").value === "" ||
      document.querySelector(".ageUp").value === "" ||
      document.querySelector(".phoneUp").value === "" ||
      document.querySelector(".cityUp").value === "اختر المدينة" ||
      document.querySelector(".universityUp").value === "اختر الجامعة"
    ) {
      window.alert("الرجاء تعبئة جميع البيانات");
    } else {
      localStorage.setItem(
        "username",
        document.querySelector(".usernameUp").value
      );
      localStorage.setItem("email", document.querySelector(".emailUp").value);
      localStorage.setItem(
        "password",
        document.querySelector(".passwordUp").value
      );
      localStorage.setItem(
        "confirmPassword",
        document.querySelector(".confirmPasswordUp").value
      );
      localStorage.setItem("age", document.querySelector(".ageUp").value);
      localStorage.setItem("phone", document.querySelector(".phoneUp").value);
      localStorage.setItem("city", document.querySelector(".cityUp").value);
      localStorage.setItem(
        "university",
        document.querySelector(".universityUp").value
      );
      setTimeout(() => {
        window.location = "signin";
      }, 1000);
    }
  };

  return (
    <>
      <div className="sign-bg">
        <Form className="sign-box" dir="rtl">
          <Form.Text className="form-title">انشاء حساب</Form.Text>
          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicUsername">
              {/* <Form.Label>اسم المستخدم</Form.Label> */}
              <Form.Control
                type="text"
                className="usernameUp"
                placeholder="ادخل اسم المستخدم"
              />
            </Form.Group>
            <Form.Group className="mb-3 inp" controlId="formBasicEmail">
              {/* <Form.Label> البريد الإلكتروني</Form.Label> */}
              <Form.Control
                type="text"
                className="emailUp"
                placeholder="ادخل البريد الإلكتروني"
              />
              <Form.Text className="text-muted" style={{ fontSize: "smaller" }}>
                لن نشارك بريدك الإلكتروني مع أي شخص آخر.
              </Form.Text>
            </Form.Group>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Group className="mb-3 inp" controlId="formBasicPassword">
              {/* <Form.Label>كلمة المرور</Form.Label> */}
              <Form.Control
                type="password"
                className="passwordUp"
                placeholder="ادخل كلمة المرور"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 inp"
              controlId="formBasicConfirmPassword"
            >
              {/* <Form.Label>تأكيد كلمة المرور</Form.Label> */}
              <Form.Control
                type="password"
                className="confirmPasswordUp"
                placeholder="تأكيد كلمة المرور"
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="sign-info mb-3 ">
            <Form.Control
              type="text"
              className="ageUp"
              placeholder="أدخل عمرك"
            />
            <Form.Control
              type="text"
              className="phoneUp"
              placeholder="أدخل رقم هاتفك"
            />
          </Form.Group>
          <Form.Group className="sign-info mb-3 ">
            <Form.Select
              className="cityUp"
              dir="ltr"
              aria-label="Default select example bg-info"
            >
              <option>اختر المدينة</option>
              <option value="المنوفية">المنوفية</option>
              <option value="القاهرة">القاهرة</option>
              <option value="الإسكندرية">الإسكندرية</option>
              <option value="أسوان">أسوان</option>
              <option value="الفيوم">الفيوم</option>
              <option value="الإسماعيلية">الإسماعيلية</option>
              <option value="مطروح">مطروح</option>
              <option value="قنا">قنا</option>
              <option value="السويس">السويس</option>
              <option value="سوهاج">سوهاج</option>
            </Form.Select>
            <Form.Select
              className="universityUp"
              dir="ltr"
              aria-label="Default select example bg-info"
            >
              <option>اختر الجامعة</option>
              <option value="جامعة المنوفية">جامعة المنوفية</option>
              <option value="جامعة القاهرة">جامعة القاهرة</option>
              <option value="جامعة الإسكندرية">جامعة الإسكندرية</option>
              <option value="جامعة أسوان">جامعة أسوان</option>
              <option value="جامعة الفيوم">جامعة الفيوم</option>
              <option value="جامعة الإسماعيلية">جامعة الإسماعيلية</option>
              <option value="جامعة مطروح">جامعة مطروح</option>
              <option value="جامعة قنا">جامعة قنا</option>
              <option value="جامعة السويس">جامعة السويس</option>
              <option value="جامعة سوهاج">جامعة سوهاج</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="mb-3 mx-2"
            controlId="formBasicCheckbox"
            dir="ltr"
          >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="sign-btn"
            onClick={checkData}
          >
            إرسال
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
