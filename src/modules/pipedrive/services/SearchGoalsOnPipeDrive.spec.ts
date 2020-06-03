import AppError from '../../../shared/errors/AppError';

import pipedriveapi from '../api/pipedriveapi';

describe('SearchGoalsOnPipeDrive', () => {
  it('should be able to search goals on pipedrive api', async () => {
    const goals = await pipedriveapi.get('goals/find', {
      params: {
        type: {
          name: 'deals_won',
        },
        api_token: process.env.API_TOKEN_PIPEDRIVE,
      },
    });

    if (goals.status !== 200) {
      throw new AppError(goals.statusText, goals.status);
    }

    expect(goals.data.data.goals).toBeDefined();
  });
});
