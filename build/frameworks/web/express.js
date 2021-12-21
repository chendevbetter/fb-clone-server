"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import morgan from 'morgan';
// import compression from 'compression';
const body_parser_1 = __importDefault(require("body-parser"));
function expressConfig(app) {
    //   app.use(compression());
    app.use(body_parser_1.default.json({ limit: '50mb' }));
    app.use(body_parser_1.default.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
    }));
    app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization, Cache-control, Pragma');
        // Pass to next layer of middleware
        next();
    });
    //   app.use(morgan('combined'));
}
exports.default = expressConfig;
