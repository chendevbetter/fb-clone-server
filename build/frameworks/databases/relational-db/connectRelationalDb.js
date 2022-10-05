"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationalConn = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const relationalConn = mysql2_1.default.createConnection({
    host: process.env.RELATIONAL_DB_HOST,
    user: process.env.RELATIONAL_DB_USER,
    password: process.env.RELATIONAL_DB_PASSWORD,
    database: process.env.RELATIONAL_DB_DATABASE,
});
exports.relationalConn = relationalConn;
