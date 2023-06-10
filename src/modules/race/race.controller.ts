import { Request, Response } from 'express';
import httpStatus from 'http-status';
//
import { IRequestData } from '@src/utils/types';
import {
  makeErrorResponse,
  makeSuccessResponse,
} from '@src/utils/response';

import configEnv from '@src/config/env';

const login = async (req: Request, res: Response) => {
  try {
    const data = {};
    // if (helper.isEmpty(data)) {
    //   return makeErrorResponse(res, httpStatus.OK, {
    //     code: httpStatus.BAD_REQUEST,
    //     message: message.AUTH.ERROR_LOGIN.MESSAGE,
    //     error: {
    //       code: message.AUTH.ERROR_LOGIN.KEY,
    //       message: message.AUTH.ERROR_LOGIN.MESSAGE,
    //     },
    //   });
    // }
    // const tokens = await authService.generateAuthTokens(data);
    // return makeSuccessResponse(res, httpStatus.OK, {
    //   code: httpStatus.OK,
    //   message: message.AUTH.LOGIN_SUCCESS,
    //   data: {
    //     user: data,
    //     tokens,
    //   },
    // });
  } catch (err) {
    return makeErrorResponse(res, httpStatus.BAD_REQUEST, {
      code: httpStatus.BAD_REQUEST,
      message: err.message,
      error: err,
    });
  }
};

const raceController = {
  login,
};
export default raceController;
