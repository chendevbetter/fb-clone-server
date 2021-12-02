"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./frameworks/web/express"));
const server_1 = __importDefault(require("./frameworks/web/server"));
const error_middleware_1 = __importDefault(require("./frameworks/middlewares/error-middleware"));
const routes_1 = __importDefault(require("./frameworks/web/routes"));
const config_1 = __importDefault(require("./config/config"));
const app = express_1.default();
express_2.default(app);
server_1.default(app, config_1.default).startServer();
routes_1.default(app, express_1.default);
app.use(error_middleware_1.default);
exports.default = app;
