import GoalPipeDrive from '../../pipedrive/interfaces/GoalPipeDrive';
import FormattedRequest from '../interfaces/FormattedRequestBling';

class FormatRequestProvider {
  public async format(goal: GoalPipeDrive): Promise<FormattedRequest> {
    const formattedGoal = {
      pedido: {
        cliente: {
          nome: 'teste 11',
          tipoPessoa: goal.assignee.type === 'company' ? 'J' : 'F',
          endereco: 'Teste',
          cpf_cnpj: '00000000000000',
          ie_rg: '3067663000',
          numero: '392',
          fone: '5481153376',
        },
        itens: {
          item: {
            codigo: '001',
            descricao: 'Caneta 001',
            un: 'Pç',
            qtde: '10',
            vlr_unit: '1.68',
          },
        },
      },
    };

    return formattedGoal;
  }
}

export default FormatRequestProvider;
