import express from 'express';
import raceController from './race.controller';
import { ROUTE_CONSTANT } from './constants';

const router = express.Router();
router.get(ROUTE_CONSTANT.RESULT, raceController.findALl);

export default router;
