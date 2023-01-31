const cardRoutes = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { validateCardId, validateCardData } = require('../middlewares/validators');

cardRoutes.get('/', getCards);
cardRoutes.delete('/:cardId', validateCardId, deleteCard);
cardRoutes.post('/', validateCardData, createCard);
cardRoutes.put('/:cardId/likes', validateCardId, likeCard);
cardRoutes.delete('/:cardId/likes', validateCardId, dislikeCard);

exports.cardRoutes = cardRoutes;
