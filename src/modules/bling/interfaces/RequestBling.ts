interface Volume {
  volume: {
    servico: string;
    codigoRastreamento: string;
  };
}

export default interface RequestBling {
  numero: string;
  idPedido: number;
  codigos_rastreamento: {
    codigo_rastreamento: string;
  };
  volumes: Volume[];
}
