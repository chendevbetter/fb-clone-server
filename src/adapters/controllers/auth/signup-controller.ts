import { Request, Response, NextFunction } from 'express';
import { expressParams } from '../../../interfaces/express';
import { signupUserUsecase } from '../../../usecases/auth/signup';

export const signupController = (db: any) => {
  const authDB = db();
  const signupUser = (req: Request, res: Response, next: NextFunction): void => {
    if (req.body) {
      signupUserUsecase(req.body, authDB, next);
      res.send('works');
    } else {
      next('no req obj');
    }
  };

  return {
    signupUser,
  };
};

// build a validation package in github that I can download and use straight from there
// start with something very simple,
