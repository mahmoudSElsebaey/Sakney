import Apartment from "../Apartments/Apartments";
import Contact from "../Contact/Contact";
import About from "../About/About";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <p className="title-section">Advertisement</p>
      <Apartment />
      <Link to="apartments" className="text-primary see-all-btn container">
        See all
      </Link>

      <p className="title-section" style={{ marginBottom: "0rem" }}>
        About Us
      </p>
      <About />
      <p className="title-section">Contact Us</p>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
