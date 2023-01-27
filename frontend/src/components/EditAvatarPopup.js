import { useEffect } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { values, errors, isValid, setIsValid, setValues, handleChange, resetForm } =
    useFormAndValidation({});
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values);
  }
  // clean form when popup opened
  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isButtonDisable={!isValid}
    >
      <input
        value={values.avatar || ""}
        onChange={handleChange}
        className="input popup__avatar-link-input"
        id="update-avatar"
        name="avatar"
        placeholder="Ссылка на аватар"
        type="url"
        required
      />
      <span className="popup__error-message popup__error-message_type_update-avatar">
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
