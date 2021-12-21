"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_routes_1 = require("./auth-routes");
const users_routes_1 = require("./users-routes");
const routes = (app, express) => {
    app.use('/api/v1/users', users_routes_1.userRouter(express));
    app.use('/api/v1/auth', auth_routes_1.authRouter(express));
};
exports.routes = routes;
exports.default = exports.routes;
