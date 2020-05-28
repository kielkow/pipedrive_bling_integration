import { MongooseDocument } from 'mongoose';
import Goal from '../database/schemas/Goal';

interface Request {
  title: string;
  target: string;
  date_start: string;
  date_end: string;
}

class ListGoals {
  public async execute({
    title,
    target,
    date_start,
    date_end,
  }: Request): Promise<MongooseDocument[]> {
    if (title && target && date_start && date_end) {
      const goals = await Goal.find({
        title,
        expected_outcome: {
          target,
        },
        duration: {
          start: date_start,
          end: date_end,
        },
      });

      return goals;
    }

    if (title && target && date_start && !date_end) {
      const goals = await Goal.find({
        title,
        expected_outcome: {
          target,
        },
        duration: {
          start: date_start,
        },
      });

      return goals;
    }

    if (title && target && !date_start && !date_end) {
      const goals = await Goal.find({
        title,
        expected_outcome: {
          target,
        },
      });

      return goals;
    }

    if (title && !target && !date_start && !date_end) {
      const goals = await Goal.find({
        title,
      });

      return goals;
    }

    const goals = await Goal.find({});

    return goals;
  }
}

export default ListGoals;
