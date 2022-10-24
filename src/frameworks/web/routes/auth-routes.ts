import { signupController } from '../../../adapters/controllers/auth/signup-controller';
import { logMiddleware } from '../../middlewares/log-middleware'
import { relationalDbQueries as authDb } from '../../databases/relational-db/relationalDbQueries';


export const authRouter = (express: any) => {
  const router = express.Router();

  // this returns an obj with methods, one of which is signup user
  // this obj has no request obj
  const controller = signupController(authDb);
  router.route('/signup').post(logMiddleware('Signup route'), controller.signupUser);
  // router.route('/signup').post(logMiddleware('signup'));

  return router;
};
