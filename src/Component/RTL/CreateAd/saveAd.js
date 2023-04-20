import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SaveAd = () => {
  const [buttonState, setButtonState] = useState({
    backgroundColor: "",
    text: "حفظ الإعلان",
    icon: "fa-save",
  });

  const changeBtnSave = () => {
    setButtonState((prevState) =>
      prevState.backgroundColor === "green"
        ? { backgroundColor: "", text: "حفظ الإعلان", icon: "fa-save" }
        : { backgroundColor: "green", text: "تم الحفظ", icon: "fa-check" }
    );
  };

  return (
    <>
      <Form className="form-save">
        <Button
          variant="primary"
          id="btnSave"
          style={{ backgroundColor: buttonState.backgroundColor }}
          onClick={() => {
            changeBtnSave();
          }}
        >
          <i className={`fas ${buttonState.icon}`}></i> {buttonState.text}
        </Button>
      </Form>
    </>
  );
};

export default SaveAd;
