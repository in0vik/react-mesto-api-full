import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import { useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

  const { values, errors, isValid, handleChange, resetForm } = useFormAndValidation({})


  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }

  // clean form when popup opened
  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <PopupWithForm
          name="place"
          title="New place"
          buttonTitle="Create"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isButtonDisable={!isValid}
        >
          <input
            value={values.name || ''}
            onChange={handleChange}
            className="input popup__place-name-input"
            name="name"
            id="place-name"
            placeholder="Title"
            type="text"
            minLength="2"
            maxLength="30"
            required
          />
          {}
          <span className="popup__error-message popup__error-message_type_place-name">{errors.name}</span>
          <input
            className="input popup__place-link-input"
            value={values.link || ''}
            onChange={handleChange}
            id="place-link"
            name="link"
            placeholder="Link to picture"
            type="url"
            required
          />
          <span className="popup__error-message popup__error-message_type_place-link">{errors.link}</span>
        </PopupWithForm>
  )
}

export default AddPlacePopup;