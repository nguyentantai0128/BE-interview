import express, { Response } from 'express';
// import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import responseTime from 'response-time';
import routes from './routers/v1';
import { notfound } from './utils/apiErrorInput';

const app = express();

app.use(responseTime());
// set security HTTP headers
// app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression({ level: 1 }));

app.use(express.static('public'));

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
// app.use(passport.initialize());
// passport.use('jwt', jwtStrategy);

// v1 api routes
app.use('/api/v1', routes);

// send back a 404 error for any unknown api request
app.use((_req, _res: Response) => {
  return _res.json(notfound());
});

export default app;
