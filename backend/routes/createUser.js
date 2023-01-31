const createUserRoutes = require('express').Router();
const { createUser } = require('../controllers/users');
const { validateUserData } = require('../middlewares/validators');

createUserRoutes.post('/', validateUserData, createUser);

exports.createUserRoutes = createUserRoutes;
