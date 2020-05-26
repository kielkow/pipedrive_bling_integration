/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import xml2js from 'xml2js';
import AppError from '../../../shared/errors/AppError';

import GoalPipeDrive from '../../pipedrive/interfaces/GoalPipeDrive';
import RequestBling from '../interfaces/RequestBling';

import CreateGoalOnDatabase from '../../../shared/services/CreateGoalOnDatabase';

import blingapi from '../api/blingapi';

class CreateRequestsOnBling {
  public async execute(goals: GoalPipeDrive[]): Promise<RequestBling[]> {
    const requests: RequestBling[] = [];

    const createGoalOnDatabase = new CreateGoalOnDatabase();

    for (const goal of goals) {
      await createGoalOnDatabase.execute(goal);

      const builder = new xml2js.Builder();
      const xml = builder.buildObject(goal);

      const response = await blingapi.post('pedido/json', {
        params: {
          apikey:
            'f1e716360b3b8804c30463e3a006302adf28da982fc9d3c67d6bb5f46f72720ba74c676e',
          xml,
        },
      });

      if (response.status !== 200) {
        throw new AppError(response.statusText, response.status);
      }

      const request: RequestBling = {
        numero: response.data.retorno.pedidos[0].pedido.numero,
        idPedido: response.data.retorno.pedidos[0].pedido.idPedido,
        codigos_rastreamento: {
          codigo_rastreamento:
            response.data.retorno.pedidos[0].pedido.codigos_rastreamento
              .codigos_rastreamento,
        },
        volumes: response.data.retorno.pedidos[0].pedido.volumes,
      };

      requests.push(request);
    }

    return requests;
  }
}

export default CreateRequestsOnBling;
