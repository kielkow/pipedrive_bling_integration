import mongoose from 'mongoose';

class Database {
  mongoConnection: Promise<typeof mongoose>;

  constructor() {
    this.mongo();
  }

  mongo(): void {
    this.mongoConnection = mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
