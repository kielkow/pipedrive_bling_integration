import mongoose from 'mongoose';

class Database {
  mongoConnection: Promise<typeof mongoose>;

  constructor() {
    this.mongo();
  }

  mongo(): void {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/pipedriveBlingIntegration',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
