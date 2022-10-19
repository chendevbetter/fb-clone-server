import { Application } from 'express';
import { authRouter } from './auth-routes';
import { userRouter } from './users-routes';

export const routes = (app: Application, express: any) => {
  app.use('/api/v1/users', userRouter(express));
  app.use('/api/v1/auth', authRouter(express));
  app.use('/', (req, res) => res.send('11'));
};

export default routes;
