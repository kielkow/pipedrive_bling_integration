import Goal from '../infra/database/schemas/Goal';

describe('ListGoals', () => {
  it('should be able to list goals from mongodb', async () => {
    const goals = await Goal.find({});

    expect(goals).toBeDefined();
  });
});
