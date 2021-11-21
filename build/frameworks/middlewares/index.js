"use strict";
// const bodyParser = require('body-parser');
// const cors = require('cors');
// var cookieSession = require('cookie-session');
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachMiddlewares = void 0;
// require('../../../authentication');
const routesMiddleware = require('./routesMiddleware');
const attachMiddlewares = (app) => {
    // app.use(bodyParser.json({ limit: '50mb' }));
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(cors());
    app.get('/', (req, res) => {
        console.log('route "/" working');
        res.send('working 123');
    });
    app.use(routesMiddleware(app));
};
exports.attachMiddlewares = attachMiddlewares;
