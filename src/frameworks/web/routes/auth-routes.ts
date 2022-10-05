import { signupController } from '../../../adapters/controllers/auth/signup-controller';
import { logMiddleware } from '../../middlewares/log-middleware';
import { relationalDb as authDb } from '../../databases/relational-db/mysqlDB';


export const authRouter = (express: any) => {
  const router = express.Router();

  // this returns an obj with methods, one of which is signup user
  // this obj has no request obj
  // const controller = signupController(authDb);

  // router.route('/signup').post(logMiddleware('signup'), controller.signupUser);
  router.route('/signup').post(logMiddleware('signup'));

  return router;
};
