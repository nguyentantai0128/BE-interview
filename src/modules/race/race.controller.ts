import { Response } from 'express';
import httpStatus from 'http-status';
//
import {
  makeErrorResponse,
  makeSuccessResponse,
} from '@src/utils/response';

import raceService from './race.service';
import { IRawPaging, IRequestList } from './dto/race.input';
import message from '@src/message';

const findALl = async (req: IRequestList, res: Response) => {
  try {
    const { year, driver, team, grandPrix, time } = req.query;

    const params = {
      year,
      driver,
      team,
      grandPrix,
      time,
    } as IRawPaging;

    const data = await raceService.listAllRace(params);
    return makeSuccessResponse(res, httpStatus.OK, {
      code: httpStatus.OK,
      message: message.SUCCESS,
      data,
    });
  } catch (err) {
    return makeErrorResponse(res, httpStatus.BAD_REQUEST, {
      code: httpStatus.BAD_REQUEST,
      message: err.message,
      error: err,
    });
  }
};

const raceController = {
  findALl,
};
export default raceController;
