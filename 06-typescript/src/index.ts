import express from 'express';
import appRouter from './routers';
import { connectDatabase } from './utils/database';

const app = express();

app.use('/api', appRouter());

const startServer = async () => {
  const port = 5000;
  try {
    await connectDatabase().then(() =>
      console.log(`Connected to the database.`)
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.error(error.reason);
  }
};
startServer();
