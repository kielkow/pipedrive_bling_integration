import xml2js from 'xml2js';
import GoalPipeDrive from '../../pipedrive/interfaces/GoalPipeDrive';
import AppError from '../../../shared/errors/AppError';

class Xml2jsProvider {
  public async generate(goal: GoalPipeDrive): Promise<string> {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(goal);

    if (!xml) {
      throw new AppError(`Not possible to convert to XML goal ${goal.id}`);
    }

    return xml;
  }
}

export default Xml2jsProvider;
