import "./App.css";

import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import Account from "./Component/UserAccount/UserAccount";
import Search from "./Component/Search/Search";
import NavbarMain from "./Component/Navbar/Navbar";
import ContactPage from "./Component/Contact/ContactPage";
import AboutPage from "./Component/About/AboutPage";
import ApartmentPage from "./Component/Apartments/ApartmentsPage";
import CreatAd from "./Component/CreateAd/CreateAd";
import Error from "./Component/Error/Error";

// Arabic pages
import NavbarAr from "./Component/RTL/Navbar_Ar/Navbar_Ar";
import HeaderContactAr from "./Component/RTL/HeaderContact_Ar/HeaderContact_Ar";
import AboutPageAr from "./Component/RTL/About/AboutPage_Ar";
import HomeAr from "./Component/RTL/Home/Home";
import ApartmentPageAr from "./Component/RTL/Apartments/ApartmentsPage";
import SearchAr from "./Component/RTL/Search/Search";
import ContactPageAr from "./Component/RTL/Contact/ContactPage";
import ErrorAr from "./Component/RTL/Error/Error";
import SigninAr from "./Component/RTL/SignIn/SignIn";
import SignupAr from "./Component/RTL/SignUp/SignUp";
import AccountAr from "./Component/RTL/UserAccount/UserAccount";

// Ad en
import CreatAdMsg from "./Component/CreateAd/CreatAdMsg";
import DetailsAd from "./Component/CreateAd/details";
import GeographyAd from "./Component/CreateAd/geography";
import PricingAd from "./Component/CreateAd/pricing";
import ImagesAd from "./Component/CreateAd/imagesAd";
import ContactAd from "./Component/CreateAd/contactAd";
import SaveAd from "./Component/CreateAd/saveAd";
// Ad Ar
import CreatAdAr from "./Component/RTL/CreateAd/CreateAd";
import CreatAdMsgAr from "./Component/RTL/CreateAd/CreatAdMsg";
import DetailsAdAr from "./Component/RTL/CreateAd/details";
import GeographyAdAr from "./Component/RTL/CreateAd/geography";
import PricingAdAr from "./Component/RTL/CreateAd/pricing";
import ImagesAdAr from "./Component/RTL/CreateAd/imagesAd";
import ContactAdAr from "./Component/RTL/CreateAd/contactAd";
import SaveAdAr from "./Component/RTL/CreateAd/saveAd";

const App = () => {
  // const handelCounter = (item) => {
  //   if (counter.indexOf(item) !== -1) return;
  //   setCounter([...counter, item]);
  // };

  return (
    <>
      {/* <HeaderContact /> */}
      <HeaderContactAr />

      <Routes>
        {/* English Language  اللغة الانجليزية */}
        <Route path="/Sakney" element={<NavbarMain />}>
          <Route path="" element={<Home />} />
          <Route path="apartments" element={<ApartmentPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="my-account" element={<Account />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="createAd" element={<CreatAd />} /> */}
          <Route path="createAd" element={<CreatAd />}>
            <Route path="" element={<CreatAdMsg />} />
            <Route path="details" element={<DetailsAd />} />
            <Route path="geography" element={<GeographyAd />} />
            <Route path="pricing" element={<PricingAd />} />
            <Route path="images" element={<ImagesAd />} />
            <Route path="ContactAd" element={<ContactAd />} />
            <Route path="save" element={<SaveAd />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>

        {/*Arabic Language  اللغة العربية */}
        <Route path="/ar" element={<NavbarAr />}>
          <Route path="" element={<HomeAr />} />
          <Route path="apartments" element={<ApartmentPageAr />} />
          <Route path="about" element={<AboutPageAr />} />
          <Route path="contact" element={<ContactPageAr />} />
          <Route path="signin" element={<SigninAr />} />
          <Route path="signup" element={<SignupAr />} />
          <Route path="my-account" element={<AccountAr />} />
          <Route path="search" element={<SearchAr />} />
          <Route path="createAd" element={<CreatAdAr />}>
            <Route path="" element={<CreatAdMsgAr />} />
            <Route path="details" element={<DetailsAdAr />} />
            <Route path="geography" element={<GeographyAdAr />} />
            <Route path="pricing" element={<PricingAdAr />} />
            <Route path="images" element={<ImagesAdAr />} />
            <Route path="ContactAd" element={<ContactAdAr />} />
            <Route path="save" element={<SaveAdAr />} />
          </Route>
          <Route path="*" element={<ErrorAr />} />
        </Route>
      </Routes>
      {/* </ApartmentsData.Provider> */}
    </>
  );
};

export default App;
