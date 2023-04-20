import React, { useState } from "react";

const ImageAd = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (event) => {
    const files = event.target.files;
    const imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      imagesArray.push(URL.createObjectURL(files[i]));
    }

    setSelectedImages(imagesArray);
  };

  return (
    <>
      <div className="imagesAd-container">
        <input type="file" multiple onChange={handleImageSelect} className="mt-3"/>
        <div className="imagesAd-box" >
          {selectedImages.length === 0 ? (
            <p className="imagesAd-msg">لم يتم تحديد صور حتى الآن</p>
          ) : (
            selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`المحدد  ${index}`}
                className="imagesAd mb-2"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default ImageAd;
