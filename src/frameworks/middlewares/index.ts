import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from '../web/routes';
import { logMiddleware } from './log-middleware';

export const attachMiddlewares = (app: any, db: number) => {
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  // log every operation to the db
  // app.use(logMiddleware());

  app.use(routes(app, db));

  app.get('/', (req: any, res: any) => {
    res.send('welcome');
  });
};
