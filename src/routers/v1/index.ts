import express from 'express';
import { ROUTE_GROUP } from '../constant';
import raceRouter from '@modules/race/race.index';

const routerApi = express.Router();

const defaultRoutes = [
  {
    path: ROUTE_GROUP.AUTH,
    route: raceRouter,
  },
];

defaultRoutes.forEach(item => {
  routerApi.use(item.path, item.route);
});

export default routerApi;
