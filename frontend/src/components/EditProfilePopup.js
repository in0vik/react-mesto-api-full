import React, { useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, setIsValid, setValues, handleChange, resetForm } =
    useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }
  // show current user data
  useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, isOpen]);


  return (
    <PopupWithForm
      name="profile"
      title="Edit Profile"
      buttonTitle="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isButtonDisable={!isValid}
    >
      <input
        value={values.name || ""}
        onChange={handleChange}
        className="input popup__profile-name-input"
        name="name"
        id="profile-name"
        placeholder="Name"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error-message popup__error-message_type_profile-name">
        {errors.name}
      </span>
      <input
        value={values.about || ""}
        onChange={handleChange}
        className="input popup__profile-job-input"
        name="about"
        id="profile-job"
        placeholder="About"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error-message popup__error-message_type_profile-job">
        {errors.about}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
