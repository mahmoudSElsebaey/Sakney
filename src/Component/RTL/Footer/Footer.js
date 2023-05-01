import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //  onClick={handleLinkClick}
  return (
    <>
      <ScrollToTop smooth top="450" />
      <footer className="bg-dark footer-sec" dir="rtl">
        <div className="container text-white footer-content ">
          <div className="footer-about col-lg-5 col-md-6 col-sm-12">
            <h3
              className="footer-logo"
              style={{ letterSpacing: "0", fontSize: "8vw" }}
            >
              سـكـنـــي
            </h3>
            <p>
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              يعتبر موقعنا من أهم المواقع على الإنترنت في مصر ، لأن موقعنا يقدم
              دائمًا أفضل الشقق للطلاب قبل أي موقع آخر في مصر.
            </p>
            <h3 className="footer-social-title">انضم الي موقعنا</h3>
            <div className="footer-social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
          <div className="footer-navgation footer-navgation-ar col-lg-2 col-md-6 col-sm-6">
            <h3>الصفحات</h3>

            <ul>
              <li>
                <Link to="/ar" onClick={handleLinkClick}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/ar/apartments" onClick={handleLinkClick}>
                  الوحدات السكنية
                </Link>
              </li>
              <li>
                <Link to="/ar/about" onClick={handleLinkClick}>
                  عنا موقعنا
                </Link>
              </li>
              <li>
                <Link to="/ar/contact" onClick={handleLinkClick}>
                  للتواصل معنا
                </Link>
              </li>
              <li>
                <Link to="/ar/signin" onClick={handleLinkClick}>
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link to="/ar/signup" onClick={handleLinkClick}>
                  انشاء حساب
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact footer-contact-ar col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer-contact-title">للتواصل معنا</h3>
            <ul>
              <li>
                <Link to="https://www.google.com/search?client=firefox-b-d&q=%D9%85%D8%B5%D8%B1+%2C+%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9+%2C%D9%85%D8%B1%D9%83%D8%B2+%D8%B4%D8%A8%D9%8A%D9%86+%D8%A7%D9%84%D9%83%D9%88%D9%85">
                  <i className="fas fa-map-marker-alt"></i> مصر , المنوفية ,مركز
                  شبين الكوم
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-phone-volume"></i> 0482977847
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-mobile-alt"></i> 01158778950
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-envelope"></i> youremail@domain.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container Author">
          <p>
            حقوق الطبع والنشر © 2022 جميع الحقوق محفوظة | من صنع
            <Link to="#"> فريق التخرج لعام 2022-2023</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
