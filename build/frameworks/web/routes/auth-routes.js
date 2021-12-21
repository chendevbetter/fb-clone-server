"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const signup_controller_1 = require("../../../adapters/controllers/auth/signup-controller");
const mysqlDB_1 = require("../../databases/relational/mysqlDB");
const log_middleware_1 = require("../../middlewares/log-middleware");
const authRouter = (express) => {
    const router = express.Router();
    // this returns an obj with methods, one of which is signup user
    // this obj has no request obj
    const controller = signup_controller_1.signupController(mysqlDB_1.relationalDb);
    router.route('/signup').post(log_middleware_1.logMiddleware('signup'), controller.signupUser);
    return router;
};
exports.authRouter = authRouter;
