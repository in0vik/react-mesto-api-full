const BadRequestError = require('../errors/BadRequestError');
const FrobiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');
const Cards = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Cards.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Cards.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(
          new BadRequestError(
            'Incorrect data were passed when creating the card.',
          ),
        );
      } else {
        next(err);
      }
    });
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Cards.findById({ _id: cardId })
    .orFail(() => {
      next(new NotFoundError('The card with the specified _id was not found'));
    })
    .then((card) => {
      if (req.user._id === card.owner.toString()) {
        Cards.remove({ _id: cardId })
          .then(() => {
            res.send(card);
          })
          .catch(next);
      } else {
        next(new FrobiddenError('No rights to delete a card'));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('The _id of the card is not correct'));
      } else {
        next(err);
      }
    });
};

module.exports.likeCard = (req, res, next) => {
  const { cardId } = req.params;
  Cards.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFoundError('Transmitted non-existent _id of the card');
    })
    .then((response) => res.send(response))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(
          new BadRequestError(
            'Incorrect data were transmitted for the marking.',
          ),
        );
      } else {
        next(err);
      }
    });
};

module.exports.dislikeCard = (req, res, next) => {
  const { cardId } = req.params;
  Cards.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      next(new NotFoundError('Transmitted non-existent _id of the card'));
    })
    .then((response) => res.send(response))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(
          new BadRequestError('Incorrect data were transmitted for the withdrawal of the "likes".'),
        );
      } else {
        next(err);
      }
    });
};
