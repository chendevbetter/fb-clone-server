"use strict";
const CARDS_ROUTE = 'card';
const getCards = require('./get-cards')(CARDS_ROUTE);
const likeCard = require('./like-card')(CARDS_ROUTE);
const disLikeCard = require('./dislike-card')(CARDS_ROUTE);
module.exports = { getCards, likeCard, disLikeCard };
