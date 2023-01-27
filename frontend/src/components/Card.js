import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Card({ cardData, onCardClick, onLike, onDelete }) {
  const currentUser = useContext(CurrentUserContext); 
  function handleClick() {
    onCardClick(cardData)
  }

  function handleLike() {
    onLike(cardData);
  }

  function handleDelete() {
    onDelete(cardData);
  }
  const isOwner = cardData.owner._id === currentUser._id;
  const isLiked = cardData.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClass = isLiked ? "button card__like-button card__like-button_active" : "button card__like-button";
  return (
    <article className="card">
      <img src={cardData.link} alt={cardData.name} className="card__image" onClick={handleClick} />
      <div className="card__info-block">
        <h2 className="card__title">{cardData.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClass} onClick={handleLike}></button>
          <p className="card__like-button-counter">{cardData.likes.length}</p>
        </div>
      </div>
      <button 
          className={isOwner ? `button card__delete-button_visible` : 'button card__delete-button_hidden'}
          onClick={handleDelete}
        >
      </button>
        
    </article>
  )
}

export default Card;