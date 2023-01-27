function ImagePopup({ card, onClose, isOpen }) {
  return (
    <section className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_image">
        <button className="button popup__close-button popup__image-close-button" type="button" onClick={onClose}></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__image-description">{card.name}</p>
      </div>
    </section>
  )
}

export default ImagePopup;