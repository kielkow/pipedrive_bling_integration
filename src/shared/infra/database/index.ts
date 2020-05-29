import mongoose from 'mongoose';

class Database {
  mongoConnection: Promise<typeof mongoose>;

  constructor() {
    this.mongo();
  }

  mongo(): void {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://pipedriveblingintegration:pipedriveblingintegration@pipedriveblingintegration-nd8ye.mongodb.net/database?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
