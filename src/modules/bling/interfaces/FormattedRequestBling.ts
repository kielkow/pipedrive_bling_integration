export default interface FormattedRequest {
  pedido: {
    cliente: {
      nome: string;
      tipoPessoa: string;
    };
    itens: Record<string, unknown>;
  };
}
