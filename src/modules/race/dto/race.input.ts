import { Request } from 'express';

type IRawPaging = {
  year?: string;
  driver?: string;
  team?: string;
  grandPrix?: string;
};

type IRequestList = Request & {
  query: {
    year?: string;
    driver?: string;
    team?: string;
    grandPrix?: string;
  };
};

export { IRawPaging, IRequestList };
