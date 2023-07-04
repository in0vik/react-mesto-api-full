const express = require('express');

const routes = express.Router();
const { cardRoutes } = require('./cards');
const { userRoutes } = require('./users');
const { loginRoutes } = require('./login');
const { createUserRoutes } = require('./createUser');
const auth = require('../middlewares/auth');
const { baseSubfolderUrl } = require('../config/config');

const baseRouter = express.Router();
baseRouter.use('/', routes);
routes.use(baseSubfolderUrl, baseRouter);

routes.use('/signin', loginRoutes);
routes.use('/signout', loginRoutes);
routes.use('/signup', createUserRoutes);

routes.use('/users', auth, userRoutes);
routes.use('/cards', auth, cardRoutes);

exports.routes = routes;
