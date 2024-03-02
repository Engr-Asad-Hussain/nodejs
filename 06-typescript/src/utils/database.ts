import mongoose from 'mongoose';

// const connString = 'mongodb://root:root@localhost:27017';

export const connectDatabase = async (
  connString: string = 'mongodb://localhost:27017'
) => {
  return mongoose.connect(connString, {
    dbName: 'ts',
    user: 'root',
    pass: 'roota',
    family: 4,
    maxPoolSize: 100,
    heartbeatFrequencyMS: 30000,
    serverSelectionTimeoutMS: 5000
  });
};
// TODO: What if, database didn't connect on-server up? The application will crash
// TODO: What if, the models have fixtures
// TODO: Why aren't we using retry in database connection
