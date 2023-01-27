import React from "react";
import { useHistory } from "react-router-dom";
import successImage from "../images/popup-success.svg";
import errorImage from "../images/popup-error.svg";

function InfoTooltip({ onClose, isOpen, tooltipContent }) {

  const history = useHistory();

  function handleOnClose() {
    if (tooltipContent.type === 'error') {
      onClose();
    } else if (tooltipContent.type === 'success') {
      onClose();
      history.push("/sign-in")
    }

    
  }

  return (
    <section className={`popup popup_type_form ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container info-tooltip__container">
        <button className="button popup__close-button" type="button" onClick={handleOnClose}></button>
        <img
          className="info-tooltip__image"
          src={`${
            (tooltipContent.type === "success" && successImage) ||
            (tooltipContent.type === "error" && errorImage)
          }`}
          alt={tooltipContent.type}
        />
        <p className="info-tooltip__title">{tooltipContent.message}</p>
      </div>
    </section>
  );
}

export default InfoTooltip;
