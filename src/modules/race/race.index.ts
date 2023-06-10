import express from 'express';
import raceController from './race.controller';
import { ROUTE_CONSTANT } from './race.contants';
// import validateRequest from '@src/middleware/validateSchema';
// import validation from './auth.validation';
// import authMiddleWare from '@middleware/auth';

const router = express.Router();
router.get(ROUTE_CONSTANT.LOGIN, raceController.login);

export default router;
