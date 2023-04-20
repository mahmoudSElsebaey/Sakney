import { Link } from "react-router-dom";
import "./HeaderContact.css";
import { useState } from "react";

function HeaderContact_Ar() {
  var [headerDir, setHeaderDir] = useState();

  const BtnAR = (e) => {
    // e.preventDefault();
    // document.querySelector("#cityLang").textContent = "مصر";
    // document.querySelector("#monthTitle").textContent = "08 أغسطس 2022";
    setHeaderDir("RTL");
  };
  const BtnEN = (e) => {
    // e.preventDefault();
    // document.querySelector("#cityLang").textContent = "Egypt";
    // document.querySelector("#monthTitle").textContent = "Aug 08,2022";
    setHeaderDir("LTR");
  };

  return (
    <>
      <div className="header-contact-parent" dir={headerDir}>
        <div className="container header-contact">
          <div className="header-weather-lang">
            <span>
              <i className="fas fa-cloud-sun"></i> 24<sup>c</sup>
              {headerDir === "RTL" ? (
                <span id="cityLang">مصر</span>
              ) : (
                <span id="cityLang">Egypt</span>
              )}
            </span>
            <span>|</span>
            <span>
              <span id="monthTitle">
                <i className="far fa-clock"></i>
                {headerDir === "RTL" ? (
                  <span>08 أغسطس 2022</span>
                ) : (
                  <span>Aug 08,2022</span>
                )}
              </span>
            </span>
            <span>|</span>
            <span className="languages-btns">
              <i className="fas fa-globe-americas"></i>
              <Link
                to="ar"
                onClick={BtnAR}
                style={
                  headerDir === "RTL"
                    ? { display: "none" }
                    : { display: "inline-block" }
                }
              >
                عربي
              </Link>
              <Link
                to=""
                onClick={BtnEN}
                id="BtnEN"
                className="BtnEN"
                style={
                  headerDir !== "RTL"
                    ? { display: "none" }
                    : { display: "inline-block" }
                }
              >
                English
              </Link>
            </span>
          </div>
          <div className="social-conatct-icons ">
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderContact_Ar;
