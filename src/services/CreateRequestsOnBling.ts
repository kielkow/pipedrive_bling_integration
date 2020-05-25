import xml2js from 'xml2js';
import AppError from '../errors/AppError';

import GoalPipeDrive from '../models/GoalPipeDrive';

import Goal from '../schemas/Goal';

import blingapi from '../ExternalAPI/blingapi';

class CreateRequestsOnBling {
  public async execute(goals: GoalPipeDrive[]): Promise<unknown> {
    const requests = goals.map(async goal => {
      await Goal.create(goal);

      const builder = new xml2js.Builder();
      const xml = builder.buildObject(goal);

      const request = await blingapi.post('pedido/json', {
        params: {
          xml,
          apikey:
            'f1e716360b3b8804c30463e3a006302adf28da982fc9d3c67d6bb5f46f72720ba74c676e',
        },
      });

      if (request.status !== 200) {
        throw new AppError(request.statusText, request.status);
      }

      return request;
    });

    return requests;
  }
}

export default CreateRequestsOnBling;
