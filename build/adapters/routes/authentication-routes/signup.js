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
// const CardsController = require('../../controllers/CardsController');
module.exports = (route) => (server) => ({
    method: 'GET',
    auth: false,
    middlewares: [],
    url: `/get-${route}`,
    handler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('route is', route);
            console.log('sign up is on');
            try {
                console.log('signing up');
            }
            catch (err) {
                console.error('error with counting employees', err);
                return next();
            }
        });
    },
});
