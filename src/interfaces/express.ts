import { Request, Response, NextFunction } from 'express';

export interface expressParams {
  req: Request;
  res: Response;
  next: NextFunction;
}