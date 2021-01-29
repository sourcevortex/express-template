import { ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';
import AppError from '@helper/AppError';
import Auth from '@helper/Auth';

interface IJWTDecoded {
  id: string;
  iat: number;
  exp: number;
}

export default class AuthMiddleware implements ExpressMiddlewareInterface {
  public async use(req: Request, res: Response, next: NextFunction) {
    const {
      headers: { authorization },
    } = req;

    let token = '';

    if (authorization && authorization.startsWith('Bearer')) {
      token = authorization.replace(/(Bearer|undefined)/gm, '').trim();
    }

    if (!token || !token.length) {
      return next(
        new AppError('You are not logged in! Please log in to get access!', 401)
      );
    }

    (await Auth.jwtVerify(token)) as IJWTDecoded;

    next();
  }
}
