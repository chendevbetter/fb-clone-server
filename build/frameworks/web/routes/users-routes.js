"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const getUsers_1 = require("../../../adapters/controllers/users/getUsers");
const log_middleware_1 = require("../../middlewares/log-middleware");
const userRouter = (express) => {
    const router = express.Router();
    router.route('/list-users').get(log_middleware_1.logMiddleware(''), getUsers_1.getUsersController);
    return router;
};
exports.userRouter = userRouter;
