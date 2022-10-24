import { Application } from 'express';
import { authRouter } from './auth-routes';
import { userRouter } from './users-routes';

export const routes = (app: Application, express: any) => {
  const baseUrl = '/api/v1'
  app.use(`${baseUrl}/users`, userRouter(express));
  app.use(`${baseUrl}/auth`, authRouter(express));
  app.use(`${baseUrl}`, (req, res) => res.send('555'));
};

export default routes;
