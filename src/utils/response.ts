import { Response } from 'express';
import Joi from 'joi';

type IResObj = {
  code: number;
  message: string;
  error?:
    | {
        code: number | string;
        message: string;
      }
    | any;
  data?: object;
};
export const makeSuccessResponse = (
  res: Response,
  status: number,
  data: IResObj
) => {
  return res.status(status).json(data);
};

export const makeErrorResponse = (
  res: Response,
  status: number,
  error: IResObj
) => {
  return res.status(status).json(error);
};

export interface PaginationParams {
  pageCurrent: number;
  total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}
