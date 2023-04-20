
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SaveAd = () => {
  const [buttonState, setButtonState] = useState({
    backgroundColor: "",
    text: "Save Ad",
    icon: "fa-save",
  });

  const changeBtnSave = () => {
    setButtonState((prevState) =>
      prevState.backgroundColor === "green"
        ? { backgroundColor: "", text: "Save Ad", icon: "fa-save" }
        : { backgroundColor: "green", text: "Saved", icon: "fa-check" }
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
