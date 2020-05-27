import GoalPipeDrive from '../../modules/pipedrive/interfaces/GoalPipeDrive';
import Goal from '../database/schemas/Goal';

class CreateGoalOnDatabase {
  public async execute(goal: GoalPipeDrive): Promise<void> {
    const findGoal = await Goal.findOne({ title: goal.title });

    if (!findGoal) {
      await Goal.create(goal);
    }
  }
}

export default CreateGoalOnDatabase;
