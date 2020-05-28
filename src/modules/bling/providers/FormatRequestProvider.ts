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
            codigo: goal.id,
            descricao: `item - ${goal.title}`,
            un: 'Pç',
            qtde: goal.expected_outcome.target,
            vlr_unit: '1',
          },
        },
      },
    };

    return formattedGoal;
  }
}

export default FormatRequestProvider;
