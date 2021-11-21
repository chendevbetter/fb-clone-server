"use strict";
const express = require('express');
const path = require('path');
const routes = require('../../adapters/routes/index');
const ROUTES_PATH = path.join(__dirname, '../../adapters/routes');
module.exports = (server) => {
    const v1Router = express.Router();
    routes.walkControllers(v1Router, ROUTES_PATH, server);
    v1Router.use('/adapters/routes', v1Router);
    return v1Router;
};
