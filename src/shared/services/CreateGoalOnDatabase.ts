import GoalPipeDrive from '../../modules/pipedrive/interfaces/GoalPipeDrive';
import Goal from '../database/schemas/Goal';
import AppError from '../errors/AppError';

class CreateGoalOnDatabase {
  public async execute(goal: GoalPipeDrive): Promise<unknown> {
    try {
      const findGoal = await Goal.findOne({ title: goal.title });

      if (!findGoal && goal.type.name === 'deals_won') {
        await Goal.create(goal);
        return null;
      }

      return findGoal;
    } catch {
      throw new AppError('Error to create goal on database', 500);
    }
  }
}

export default CreateGoalOnDatabase;
