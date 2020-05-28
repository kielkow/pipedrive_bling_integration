/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import AppError from '../../../shared/errors/AppError';

import GoalPipeDrive from '../../pipedrive/interfaces/GoalPipeDrive';
import RequestBling from '../interfaces/RequestBling';

import CreateGoalOnDatabase from '../../../shared/services/CreateGoalOnDatabase';
import Xml2jsProvider from '../providers/Xml2jsProvider';
import FormatRequestProvider from '../providers/FormatRequestProvider';

import blingapi from '../api/blingapi';

class CreateRequestsOnBling {
  public async execute(goals: GoalPipeDrive[]): Promise<RequestBling[]> {
    const createGoalOnDatabase = new CreateGoalOnDatabase();
    const xml2jsProvider = new Xml2jsProvider();
    const formatRequestProvider = new FormatRequestProvider();

    const requests: RequestBling[] = [];

    for (const goal of goals) {
      try {
        await createGoalOnDatabase.execute(goal);
        const formattedGoal = await formatRequestProvider.format(goal);
        const xml = await xml2jsProvider.generate(formattedGoal);

        const response = await blingapi.post('pedido/json', null, {
          params: {
            apikey:
              'f1e716360b3b8804c30463e3a006302adf28da982fc9d3c67d6bb5f46f72720ba74c676e',
            xml,
          },
        });

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
      } catch (err) {
        throw new AppError(err.response.data.retorno.erros.erro.msg, 500);
      }
    }

    return requests;
  }
}

export default CreateRequestsOnBling;
