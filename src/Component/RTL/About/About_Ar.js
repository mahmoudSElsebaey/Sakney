import React from "react";
// import OurTeam from "../OurTeam/OurTeam";
// import "./About.css";
import aboutImg1 from "./AboutImages/Students.gif";
import aboutImg2 from "./AboutImages/House searching-cuate.png";

function About_Ar() {
  return (
    <>
      <div className="container about-sec " dir="rtl">
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg1} alt="combo offer" />
        </div>
        <div className="about-website col-lg-7 col-md-6 col-sm-12">
          <h3 style={{ letterSpacing: "0" }}>حـــول موقعنـــــا</h3>
          <p>
            يعتبر موقعنا من أهم المواقع المتاحة علي الإنترنت في مصر ، لأن موقعنا يقدم
            دائمًا أفضل الشقق المناسبة للطلاب المغتربين وكذلك للعملاء والمستثمرين في مصر .
          </p>
          <p>
            كما يتميز موقعنا بتنوع الشقق وأسعارها المناسبة لجميع الطلاب لجميع
            المستويات ، كما يتوفر لدينا جميع أنواع الشقق التي يبحث عنها الطلاب
            والتي تساعدهم علي السكن بالقرب من الجامعة الخاصة بيهم ومكان دراستهم
          </p>
        </div>
        <div className="about-howUse about-howUse-ar col-lg-7 col-md-6 col-sm-12">
          <h3 style={{ letterSpacing: "0" }}>
            كـيـف يمكنـك اسـتخدام مـوقع سكنــي
          </h3>
          <ul>
            <li>
              <span>1</span> انشاء حساب او تسجيل الدخول
              <p>
                اولا يجب عليك لاستخدام موقعنا ان تقوم بتسجيل الدخول بحسابك
                الشخصي او انشاء حساب جديد اذا لم تك تملك حساب .
              </p>
            </li>
            <li>
              <span>2</span> اضافة اعلان او البحث عن سكن
              <p>
                اذا كنت تمتلك وحدات سكانية للايجار يمكنك اضافة اعلان عنها مقدمة
                للطلاب المغتربين عبر موقعنا .
              </p>
              <p>
                اذا كنت من الطلاب المغتربين تبحث عن شقق للايجار بالقرب من
                الجامعة اثناء الدراسة يمكنك البحث عنه من خلال موقعنا في خانة
                البحث .
              </p>
            </li>
            <li>
              <span>3</span> إرسال طلب الدفع
              <p>
                واخيرا عند الانتهاء من اضلافة اعلان او عند الانتهاء من البحث عن
                السكن المناسب يمكنك دفع رسوم الايجار من خلال موقعنا
              </p>
            </li>
          </ul>
          <button>للمزيد من المعلومات</button>
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

export default About_Ar;
