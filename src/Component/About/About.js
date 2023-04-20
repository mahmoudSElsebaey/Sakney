import React from "react";
// import OurTeam from "../OurTeam/OurTeam";
import "./About.css";
import aboutImg1 from "./AboutImages/Students.gif";
import aboutImg2 from "./AboutImages/House searching-cuate.png";

function About() {
  return (
    <>
      <div className="container about-sec ">
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg1} alt="combo offer" />
        </div>
        <div className="about-website col-lg-7 col-md-6 col-sm-12">
          <h3>Our Website</h3>
          <p>
            Our site is considered one of the most important sites available on
            the Internet in Egypt, because our site offers Always the best
            suitable apartments for expatriate students as well as for clients
            and investors in Egypt
          </p>
          <p>
            Our website is also characterized by a variety of apartments and
            prices suitable for all students for all levels , as well as we have
            all type of apartments that you want.
          </p>
        </div>
        <div className="about-howUse col-lg-7 col-md-6 col-sm-12">
          <h3>How to use the website</h3>
          <ul>
            <li>
              <span>1</span> Sign in or Sign up
              <p>
                First, to use our website, you must log in with your personal
                account or create a new account if you do not have an account .
              </p>
            </li>
            <li>
              <span>2</span> add your ads or search for apartment
              <p>
                If you own residential units for rent, you can add an
                advertisement for expatriate students on our website .
              </p>
              <p>
                If you are an expatriate student looking for apartments for rent
                near the university during The study you can search for through
                our website in the search box .
              </p>
            </li>
            <li>
              <span>3</span> send payment request
              <p>
                Finally, when you finish adding an ad, or when you finish
                searching for Suitable housing You can pay the rental fee
                through our website
              </p>
            </li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg2} alt="Ambassador-pana" />
        </div>
        {/* <div className="ourTeam col-12">
          <p className="title-section">Our Team</p>
           <OurTeam /> 
        </div> */}
      </div>
    </>
  );
}

export default About;
