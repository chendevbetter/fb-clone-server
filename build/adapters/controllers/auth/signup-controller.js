"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const signup_1 = require("../../../usecases/auth/signup");
const signupController = (db) => {
    const authDB = db();
    const signupUser = (req, res, next) => {
        if (req.body) {
            signup_1.signupUserUsecase(req.body, authDB, next);
            res.send('works');
        }
        else {
            next('no req obj');
        }
    };
    return {
        signupUser,
    };
};
exports.signupController = signupController;
// build a validation package in github that I can download and use straight from there
// start with something very simple,
