import { NextFunction, Request, Response } from 'express';

import { ZodError, ZodType } from 'zod';

export const validate =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          errors: error.issues,
          message: 'Validation error',
        });
      }

      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  };
