import GoalPipeDrive from '../models/GoalPipeDrive';
import Goal from '../schemas/Goal';

class CreateGoalOnDatabase {
  public async execute(goal: GoalPipeDrive): Promise<void> {
    const findGoal = await Goal.find({ title: goal.title });

    if (!findGoal) {
      await Goal.create(goal);
    }
  }
}

export default CreateGoalOnDatabase;
