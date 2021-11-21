// const bodyParser = require('body-parser');
// const cors = require('cors');
// var cookieSession = require('cookie-session');

// require('../../../authentication');

const routesMiddleware = require('./routesMiddleware');

export const attachMiddlewares = (app: any) => {
  // app.use(bodyParser.json({ limit: '50mb' }));
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(cors());

  app.get('/', (req: any, res: any) => {
    console.log('route "/" working');
    res.send('working 123');
  });

  app.use(routesMiddleware(app));
};
