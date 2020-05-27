export default interface FormattedRequest {
  pedido: {
    cliente: {
      nome: string;
      tipoPessoa: string;
      endereco: string;
      cpf_cnpj: string;
      ie_rg: string;
      numero: string;
      fone: string;
    };
    itens: Record<string, unknown>;
  };
}
