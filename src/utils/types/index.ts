import { Request, Response } from 'express';

export type IStatus = {
  code: number;
  message: string;
};
export type IErrorField = {
  key: string;
  message: string;
};

export type IErrorResponse<T> = IStatus & {
  error: T;
};

export type IClientResponse<T> = {
  status: IStatus;
  data: T;
};

export interface IRequestData<T> extends Request {
  body: T;
}

export type IRequestQuery = Request & {
  query: {
    amount: string;
    page: string;
    search?: string;
  };
};

export type IRequestSearch = Request & {
  query: {
    email: string;
  };
};

export type IResponseLocal = Response & {
  locals: {
    roles: [];
    userId: string;
  };
};
