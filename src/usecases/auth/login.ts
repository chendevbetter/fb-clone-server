import { NextFunction } from 'express';

export const loginUseCase = async (data: any, db: any, next: NextFunction) => {
  try {
    return await db.loginUser(data);
  } catch(e) {
    console.log('creating user failed')
    return e
  }
};
