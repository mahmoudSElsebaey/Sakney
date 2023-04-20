import React, { useState } from "react";
import apartmentsData from "./Data/apartmentsData";
import DrawingData from "./DrawingData";
import "./Apartments.css";

function Apartment() {
  const [data] = useState(apartmentsData);
  // const [data, setData] = useState(apartmentsData);
  // const filterCats = (catItem) => {
  //   const res = apartmentsData.filter((curData) => {
  //     return curData.category === catItem;
  //   });
  //   setData(res);
  // };

  return (
    <>
      <section className="d-flex">
        <div className="container all-apartments">
          {data.map((item) => {
            return (
              <DrawingData
                key={item.id}
                item={item}
                // handelCounter={handelCounter}
              />
            );
          })}
         {data.map((item) => {
            return (
              <DrawingData
                key={item.id}
                item={item}
                // handelCounter={handelCounter}
              />
            );
          })}
           {/* {data.map((item) => {
            return (
              <DrawingData
                key={item.id}
                item={item}
                // handelCounter={handelCounter}
              />
            );
          })} */}
        </div>
      </section>
    
    </>
  );
}

export default Apartment;
