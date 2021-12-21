"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationalConn = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const relationalConn = mysql2_1.default.createConnection({
    host: 'mysql-db.cft7cnlmrjnu.us-east-1.rds.amazonaws.com',
    user: 'excitingWorld',
    password: 'limitless',
    database: 'users-app',
});
exports.relationalConn = relationalConn;
