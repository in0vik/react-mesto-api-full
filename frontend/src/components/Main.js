import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) {
 
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <div className="profile__avatar-change-overlay link"></div>
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar link" />
        </div>
        <div className="profile__information">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="button profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="button profile__add-person-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
            <Card 
              key={card._id} 
              cardData={card} 
              onCardClick={onCardClick} 
              onLike={onCardLike} 
              onDelete={onCardDelete} />
          )
        )}
      </section>
    </main>
  )
}

export default Main;