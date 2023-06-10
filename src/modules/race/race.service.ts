import db from '@src/config/database';
import { IResRace } from './entities/entity';
import { IRawPaging } from './dto/race.input';

const select = {
  id: true,
  date: true,
  grandPrix: true,
  driver: true,
  team: true,
  laps: true,
  time: true,
};

const listAllRace = async (
  params: IRawPaging
): Promise<Array<IResRace>> => {
  const where = {} as any;
  if (params.year && params.year.length > 0) {
    where.AND = [
      {
        date: {
          gte: new Date(`${params.year}-01-01`),
        },
      },
      {
        date: {
          lt: new Date(`${Number(params.year) + 1}-01-01`),
        },
      },
    ];
  }
  if (params.driver || params.team || params.grandPrix) {
    where.OR = [
      { driver: { contains: params.driver } },
      { team: { contains: params.team } },
      { grandPrix: { contains: params.grandPrix } },
    ];
  }
  return await db.race_results.findMany({
    select,
    where,
  });
};

const raceService = {
  listAllRace,
};
export default raceService;
