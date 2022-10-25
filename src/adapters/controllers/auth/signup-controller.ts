import { Request, Response, NextFunction } from 'express';
import { signupUserUseCase } from '../../../usecases/auth/signup';
import { loginUseCase } from '../../../usecases/auth/login';

export const authController = (db: any) => {
  const authDB = db();
  const signupUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    if (req.body) {
      const result = await signupUserUseCase(req.body, authDB, next);
      const {code, msg} = result
      res.status(code).send(msg)
    } else {
      next({ msg: 'no req obj' });
    }
  };

  const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    if (req.body) {
      const result = await loginUseCase(req.body, authDB, next);
      const {code, msg} = result
      res.status(code).send(msg)
    } else {
      next({ msg: 'no req obj' });
    }
  }

  return {
    signupUser,
    login
  };
};

// build a validation package in github that I can download and use straight from there
// start with something very simple,
