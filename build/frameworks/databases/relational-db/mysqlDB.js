"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationalDb = void 0;
const connectRelationalDb_1 = require("./connectRelationalDb");
// I've got a few options here:
// 1. I use straight up sql - not recommended - I practice this in other places
// 2. I use sequlize straight up here
// 3. I use an internal library I'll build based on sequlize and here I'll only use it
// this is what I'll do. It will be a databases repo including mysql, mongo, redis etc
// THIS project will define .env files for it to use and pass the credentials as a parameter
// the repo alone will not be able to connect anywhre as it wont have credentials.
const relationalDb = () => {
    const signUpUserToDb = (entityUserObj) => __awaiter(void 0, void 0, void 0, function* () {
        const firstName = entityUserObj.getFirstName();
        const lastName = entityUserObj.getLastName();
        const email = entityUserObj.getEmail();
        const password = entityUserObj.getPassword();
        const birthdayDate = entityUserObj.getBirthdayDate();
        const gender = entityUserObj.getGender();
        const created_at = new Date();
        try {
            connectRelationalDb_1.relationalConn.query(`INSERT INTO users (first_name, last_name, email, password, birthday_date, gender, created_at) VALUES 
        (?,?,?,?,?,?,?)`, [firstName, lastName, email, password, birthdayDate, gender, created_at]);
        }
        catch (e) {
            console.log('problem with creating user', e);
        }
    });
    return {
        signUpUserToDb,
    };
};
exports.relationalDb = relationalDb;
exports.default = exports.relationalDb;
