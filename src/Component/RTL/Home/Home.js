import Apartment from "../Apartments/Apartments";
import Contact from "../Contact/Contact";
// import About from "./../About/About";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import About from "./../About/About_Ar";

function Home() {
  return (
    <>
      <Header />
      <p className="title-section">الوحدات السكنية</p>
      <Apartment />
      <Link to="apartments" className="text-primary see-all-btn container">
        عرض الكل
      </Link>

      <p className="title-section" style={{ paddingBottom: "10px" }}>
        عن موقعنـــــا
      </p>
      <About />
      <p className="title-section" style={{ paddingBottom: "10px" }}>
        للتواصل معنا
      </p>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
