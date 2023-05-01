import React from "react";

const ApartmentInfo = ({ display, handelDispay, item }) => {
  const { name, price, image, citya } = item;

  return (
    <>
      <div className="apartment-info" style={{ display }} dir="rtl">
        <button className="btn btn-danger" onClick={handelDispay}>
          X
        </button>
        <div className="container apartment-info-box">
          <p className="apartment-info-title">{name}</p>
          <div className="apartment-info-img">
            <img src={image} alt="صورة الشقة" />
            <p>
              يفضل المشاركة في الشقق من قبل الأشخاص الذين يبحثون عن خيارات سكنية
              أكثر اقتصادًا أو الذين يرغبون في العيش مع الآخرين لأسباب اجتماعية.
              كما يمكن أن يكون خيارًا جيدًا للأشخاص الذين يعيشون في مدينة جديدة
              ويريدون التعرف على أشخاص جدد.
            </p>
          </div>
          <div className="apartment-more-info">
            <p>
              لدينا بعض الخيارات المتاحة التي قد تناسب ميزانيتك. لدينا شقق
              مشتركة بغرف نوم خاصة تبدأ من حوالي {price} جنيه مصري شهريًا.
              وتتضمن هذه الشقق عادةً مساحات مشتركة مثل غرفة المعيشة والمطبخ
              والحمام ، ويتم تقسيم الخدمات مثل الكهرباء والمياه بين المستأجرين.
              هل تريد مني أن أعرض عليك بعض الخيارات التي يمكن أن تناسبك؟
            </p>
            <p>
              لدينا عدد من خيارات الشقق المشتركة المتاحة في مدينة {citya} التي
              قد تناسب ميزانيتك التي تبدأ من {price} جنيه مصري شهريًا. تتضمن هذه
              الشقق عادةً غرف نوم خاصة ومساحات معيشة مشتركة وتقع في مناطق مختلفة
              من المدينة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentInfo;
