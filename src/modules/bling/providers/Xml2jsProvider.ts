import xml2js from 'xml2js';
import FormattedRequest from '../interfaces/FormattedRequestBling';
import AppError from '../../../shared/errors/AppError';

class Xml2jsProvider {
  public async generate(formattedGoal: FormattedRequest): Promise<string> {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(formattedGoal);

    if (!xml) {
      throw new AppError(
        `Not possible to convert to XML goal ${formattedGoal.pedido.cliente.numero}`,
      );
    }

    return xml;
  }
}

export default Xml2jsProvider;
