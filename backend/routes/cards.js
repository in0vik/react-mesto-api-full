const cardRoutes = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { validateUserData, validateCardData } = require('../middlewares/validators');

cardRoutes.get('/', getCards);
cardRoutes.delete('/:cardId', validateCardData, deleteCard);
cardRoutes.post('/', validateUserData, createCard);
cardRoutes.put('/:cardId/likes', validateCardData, likeCard);
cardRoutes.delete('/:cardId/likes', validateCardData, dislikeCard);

exports.cardRoutes = cardRoutes;
