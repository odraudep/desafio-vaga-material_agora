import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
