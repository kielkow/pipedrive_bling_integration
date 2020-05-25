import Goal from '../schemas/Goal';

class ListGoals {
  public async execute(): Promise<unknown> {
    const goals = await Goal.find({});

    return goals;
  }
}

export default ListGoals;
