import express from 'express';
import expressConfig from './frameworks/web/express';
import serverConfig from './frameworks/web/server';
import errorMiddleware from './frameworks/middlewares/error-middleware';
import routes from './frameworks/web/routes';
import config from './config/config';

const app = express();

expressConfig(app);

serverConfig(app, config).startServer();

routes(app, express);

app.use(errorMiddleware);

export default app;
