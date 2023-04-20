import Form from "react-bootstrap/Form";
import Footer from "../Footer/Footer";
import "./Search.css";
import Button from "react-bootstrap/Button";
 

function Search() {
  return (
    <>
      <div className="sign-bg">
        <div className="search-box search-box-Ar">
          <h2 className="form-title">البحــث</h2>

          <Form.Label className="search-title">اختر المدينة</Form.Label>
          <Form.Select aria-label="Default select example bg-info">
            <option> كل المدن</option>
            <option value="1">المنوفية</option>
            <option value="2">القاهرة</option>
            <option value="3">الاسكندرية</option>
            <option value="4">أسوان</option>
            <option value="5">الفيوم</option>
            <option value="6">الاسماعلية</option>
            <option value="7">مرسى مطروح</option>
            <option value="8">قنــــا</option>
            <option value="9">السويس</option>
            <option value="10">سوهاج</option>
          </Form.Select>

          <Form.Label className="search-title">ابحث عن</Form.Label>
          <Form.Select aria-label="Default select example">
            {/* <option>الكل</option> */}
            <option value="1">سكن مشترك</option>
            <option value="2">سكن للعمل</option>
          </Form.Select>

          <Form.Label className="search-title">نوع الإقامة</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>الكل</option>
            <option value="1">غرفة</option>
            <option value="2">BHK-شقة صغيرة</option>
            <option value="3">سرير</option>
            <option value="4">شقة استديو</option>
            <option value="5">جزء منفصل</option>
          </Form.Select>

          <Button variant="outline-primary" type="search" href='apartments'>
            <i className="fas fa-search"></i> بحث
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Search;
