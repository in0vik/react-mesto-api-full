import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup( { isOpen, onClose, onSubmit, selectedCard } ) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(selectedCard);
  }

  return (
    <PopupWithForm name="confirm" title="Are you sure?" buttonTitle="Yes" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isButtonDisable={false}/>
  )
}

export default ConfirmDeleteCardPopup;