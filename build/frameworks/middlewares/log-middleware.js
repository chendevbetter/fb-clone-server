"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (data = 'default') => (req, res, next) => {
    console.log(data, 'log works 123');
    next();
};
exports.logMiddleware = logMiddleware;
