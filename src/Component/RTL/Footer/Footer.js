import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Footer() {
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
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/categories">الوحدات السكنية</Link>
              </li>
              <li>
                <Link to="/about"> عنا موقعنا</Link>
              </li>
              <li>
                <Link to="/contact">للتواصل معنا</Link>
              </li>
              <li>
                <Link to="/login">تسجيل الدخول</Link>
              </li>
              <li>
                <Link to="/register">انشاء حساب</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact footer-contact-ar col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer-contact-title">للتواصل معنا</h3>
            <ul>
              <li>
                <Link to="#">
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
