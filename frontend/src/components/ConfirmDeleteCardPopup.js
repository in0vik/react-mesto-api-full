import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup( { isOpen, onClose, onSubmit, selectedCard } ) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(selectedCard);
  }

  return (
    <PopupWithForm name="confirm" title="Вы уверены?" buttonTitle="Да" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isButtonDisable={false}/>
  )
}

export default ConfirmDeleteCardPopup;