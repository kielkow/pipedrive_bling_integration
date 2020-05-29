import AppError from '../../../shared/errors/AppError';

import GoalPipeDrive from '../interfaces/GoalPipeDrive';

import pipedriveapi from '../api/pipedriveapi';

class SearchGoalsOnPipeDrive {
  public async execute(): Promise<GoalPipeDrive[]> {
    try {
      const goals = await pipedriveapi.get('goals/find', {
        params: {
          type: {
            name: 'deals_won',
          },
          api_token: process.env.API_TOKEN_PIPEDRIVE,
        },
      });

      return goals.data.data.goals;
    } catch {
      throw new AppError('Error to search by goals on Pipedrive', 500);
    }
  }
}

export default SearchGoalsOnPipeDrive;
