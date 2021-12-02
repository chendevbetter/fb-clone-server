import { NextFunction } from 'express';
import makeUser from '../../entities/users';

export const signupUserUsecase = (data: any, db: any, next: NextFunction) => {
  const user = makeUser(data, next);

  return db.signUpUserToDb(user);
};
