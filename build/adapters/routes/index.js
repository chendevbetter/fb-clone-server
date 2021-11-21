"use strict";
// 
// Delete previous commit. Add ALL files and repush
// 
// import { valid } from "joi"
const fs = require('fs');
const _ = require('lodash');
const noop = (req, res, next) => next();
// const _wrapAsyncFn = (fn: any, url: any) => (...args: any) => fn(...args).catch(handleError())
const _wrapAsyncFn = (fn, url) => (...args) => fn(...args);
const readController = (router, controller, server) => {
    _.each(controller, (action) => {
        const { method, url, validation, middlewares = [], handler, } = action(server);
        const normalizedMethod = method.toLowerCase();
        const fn = handler ? _wrapAsyncFn(handler, url) : noop;
        if (validation)
            middlewares.push((req, res, next) => {
                // validate(validation)(req, res, (err: any) => {
                //   if (err) {
                //     console.log('err', err);
                //     // return res.respond(err.status, errors);
                //     // res.status(err.statusCode).send(err.error);
                //     next(err);
                //   }
                //   return next();
                // });
            });
        router[normalizedMethod](url, ...middlewares, fn);
    });
};
const walkControllers = (router, filePath, server) => {
    fs.readdirSync(filePath).forEach((fileName) => {
        const fullPath = filePath + '/' + fileName;
        if (fullPath.match(/\.routes$/)) {
            const controller = require(fullPath);
            readController(router, controller, server);
        }
    });
};
module.exports = {
    readController,
    walkControllers,
};
