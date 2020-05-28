import { Request, Response } from 'express';

import ListGoals from '../../../services/ListGoals';
import SearchGoalsOnPipeDrive from '../../../../modules/pipedrive/services/SearchGoalsOnPipeDrive';
import CreateRequestsOnBling from '../../../../modules/bling/services/CreateRequestsOnBling';

export default class GoalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listGoals = new ListGoals();

    const params = {
      title: request.params.title || '',
      target: request.params.target || '',
      date_start: request.params.date_start || '',
      date_end: request.params.date_end || '',
    };

    const goals = await listGoals.execute(params);

    return response.json(goals);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const searchGoalsOnPipeDrive = new SearchGoalsOnPipeDrive();
    const createRequests = new CreateRequestsOnBling();

    const goals = await searchGoalsOnPipeDrive.execute();
    const requests = await createRequests.execute(goals);

    return response.json(requests);
  }
}
