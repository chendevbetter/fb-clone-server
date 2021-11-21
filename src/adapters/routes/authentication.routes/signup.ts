import { Request, Response, NextFunction } from 'express';

// const CardsController = require('../../controllers/CardsController');

module.exports = (route: string) => (server: any) => ({
  method: 'GET',
  auth: false,
  middlewares: [],
  url: `/get-${route}`,
  async handler(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('signing up');
      res.send('sign up works !');
    } catch (err) {
      console.error('error with counting employees', err);
      return next();
    }
  },
});
