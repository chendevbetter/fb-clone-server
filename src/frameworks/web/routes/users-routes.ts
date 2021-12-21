import { getUsersController } from '../../../adapters/controllers/users/getUsers';
import { logMiddleware } from '../../middlewares/log-middleware';

export const userRouter = (express: any) => {
  const router = express.Router();
  router.route('/list-users').get(logMiddleware(''), getUsersController);
  return router;
};
