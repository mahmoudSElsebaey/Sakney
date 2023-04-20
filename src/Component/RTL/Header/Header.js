import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-bg">
        <div className="header-text">
          <h3 style={{ letterSpacing: "normal" }}>مرحبــــاً بك</h3>
          <h2>للبحث عن شقق سكنية مشتركة للطلاب المغتربين</h2>
          <p>سكنى هى الوجهة الأولى للباحثين عن السكن المشترك فى مصر</p>
          <div className="header-btns">
            <button className="btn btn-primary" dir="rtl">
              <i className="fas fa-search"></i>
              <Link to="search"> بحث</Link>
            </button>
            <button className="btn btn-danger" dir="rtl">
              <i className="fas fa-plus"></i>
              <Link to="search"> اضف اعلان</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
