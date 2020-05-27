import AppError from '../../../shared/errors/AppError';

import GoalPipeDrive from '../interfaces/GoalPipeDrive';

import pipedriveapi from '../api/pipedriveapi';

class SearchGoalsOnPipeDrive {
  public async execute(): Promise<GoalPipeDrive[] | []> {
    try {
      const goals = await pipedriveapi.get('goals/find', {
        params: {
          type: {
            name: 'deals_won',
          },
          api_token: '315af955d0e215af97ca19d987e95a41e9c61d81',
        },
      });

      return goals.data.data.goals;
    } catch {
      throw new AppError('Error to search by goals on Pipedrive', 500);
    }
  }
}

export default SearchGoalsOnPipeDrive;
