import { ValidationError } from 'joi';
import httpStatus from 'http-status';
import { IErrorField, IErrorResponse } from './types';
import {
  resStatusAccessDenied,
  resStatusBadRequest,
  resStatusInputFailure,
  resStatusInternalSever,
  resStatusNotFound,
  resStatusUnAuthorize,
} from './status';

export const handleErrorsRequest = (
  error: ValidationError
): IErrorResponse<Array<IErrorField>> => {
  const lsErrorField: Array<IErrorField> = [];
  if (error.details.length > 0) {
    error.details.forEach(err => {
      const { key = '' } = err.context;
      const { message } = err;
      lsErrorField.push({
        key,
        message: message.replace(/"/g, ''),
      });
    });
  }
  return {
    ...resStatusInputFailure(),
    error: lsErrorField,
  };
};

export const handleErrorsModel = (
  error: IErrorField
): IErrorResponse<Array<IErrorField>> => {
  return {
    ...resStatusInputFailure(),
    error: [error],
  };
};

export const internalServer = () => {
  return {
    ...resStatusInternalSever(),
    error: {
      message: httpStatus[500],
    },
  };
};

export const unauthorizeUser = () => {
  return {
    ...resStatusUnAuthorize(),
    error: {
      message: httpStatus[401],
    },
  };
};

export const accessDeniedUser = () => {
  return {
    ...resStatusAccessDenied(),
    error: {
      message: httpStatus[403],
    },
  };
};

export const badRequest = (errorMessage: string) => {
  return {
    ...resStatusBadRequest(),
    error: {
      message: errorMessage || httpStatus.NOT_FOUND,
    },
  };
};

export const notfound = () => {
  return {
    ...resStatusNotFound(),
    error: {
      message: httpStatus[404],
    },
  };
};
