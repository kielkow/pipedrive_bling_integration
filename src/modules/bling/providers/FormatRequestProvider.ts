import GoalPipeDrive from '../../pipedrive/interfaces/GoalPipeDrive';
import FormattedRequest from '../interfaces/FormattedRequestBling';

class FormatRequestProvider {
  public async format(goal: GoalPipeDrive): Promise<FormattedRequest> {
    const formattedGoal = {
      pedido: {
        cliente: {
          nome: goal.title,
          tipoPessoa: goal.assignee.type === 'company' ? 'J' : 'F',
        },
        itens: {
          item: {
            codigo: '001',
            descricao: 'item',
            un: 'Pç',
            qtde: '1',
            vlr_unit: '1',
          },
        },
      },
    };

    return formattedGoal;
  }
}

export default FormatRequestProvider;
