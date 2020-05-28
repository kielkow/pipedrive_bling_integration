import GoalPipeDrive from '../../pipedrive/interfaces/GoalPipeDrive';
import FormattedRequest from '../interfaces/FormattedRequestBling';

class FormatRequestProvider {
  public async format(goal: GoalPipeDrive): Promise<FormattedRequest> {
    const formattedGoal = {
      pedido: {
        cliente: {
          nome: 'teste 12',
          tipoPessoa: goal.assignee.type === 'company' ? 'J' : 'F',
          endereco: 'Teste 4',
          cpf_cnpj:
            goal.assignee.type === 'company' ? '00000000000000' : '00000000000',
          ie_rg: '3067663000',
          numero: '392',
          fone: '5481153376',
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
