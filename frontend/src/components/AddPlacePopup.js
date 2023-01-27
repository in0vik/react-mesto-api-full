import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import { useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

  const { values, errors, isValid, setIsValid, setValues, handleChange, resetForm } = useFormAndValidation({})


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
          title="Новое место"
          buttonTitle="Создать"
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
            placeholder="Название"
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
            placeholder="Ссылка на картинку"
            type="url"
            required
          />
          <span className="popup__error-message popup__error-message_type_place-link">{errors.link}</span>
        </PopupWithForm>
  )
}

export default AddPlacePopup;