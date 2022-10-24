import { NextFunction } from 'express';
import makeUser from '../../entities/users';

export const signupUserUseCase = async (data: any, db: any, next: NextFunction) => {
  const user = makeUser(data, next);
  try {
    return await db.signUpUserToDb(user);
  } catch(e) {
    console.log('creating user failed')
  }

};
