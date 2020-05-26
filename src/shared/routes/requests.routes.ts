import { Router } from 'express';

import SearchGoalsOnPipeDrive from '../../modules/pipedrive/services/SearchGoalsOnPipeDrive';
import CreateRequestsOnBling from '../../modules/bling/services/CreateRequestsOnBling';
import ListGoals from '../services/ListGoals';

const requestsRouter = Router();

requestsRouter.post('/', async (request, response) => {
  const searchGoalsOnPipeDrive = new SearchGoalsOnPipeDrive();
  const createRequests = new CreateRequestsOnBling();

  const goals = await searchGoalsOnPipeDrive.execute();
  const requests = await createRequests.execute(goals);

  return response.json(requests);
});

requestsRouter.get('/', async (request, response) => {
  const listGoals = new ListGoals();

  const goals = await listGoals.execute();

  return response.json(goals);
});

export default requestsRouter;
