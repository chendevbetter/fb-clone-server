"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachMiddlewares = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../web/routes");
const attachMiddlewares = (app, db) => {
    app.use(body_parser_1.default.json({ limit: '50mb' }));
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(cors_1.default());
    // log every operation to the db
    // app.use(logMiddleware());
    app.use(routes_1.routes(app, db));
    app.get('/', (req, res) => {
        res.send('welcome');
    });
};
exports.attachMiddlewares = attachMiddlewares;
