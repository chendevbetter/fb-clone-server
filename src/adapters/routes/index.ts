


// 


// Delete previous commit. Add ALL files and repush



// 









// import { valid } from "joi"

const fs = require('fs');
const _ = require('lodash');

const noop = (req: any, res: any, next: any) => next();

// const _wrapAsyncFn = (fn: any, url: any) => (...args: any) => fn(...args).catch(handleError())
const _wrapAsyncFn =
  (fn: any, url: any) =>
  (...args: any) =>
    fn(...args);

const readController = (router: any, controller: any, server: any) => {
  _.each(controller, (action: any) => {
    const {
      method,
      url,
      validation,
      middlewares = [],
      handler,
    } = action(server);
    const normalizedMethod = method.toLowerCase();

    const fn = handler ? _wrapAsyncFn(handler, url) : noop;
    if (validation)
      middlewares.push((req: any, res: any, next: any) => {
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

const walkControllers = (router: any, filePath: any, server: any) => {
  fs.readdirSync(filePath).forEach((fileName: string) => {
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
