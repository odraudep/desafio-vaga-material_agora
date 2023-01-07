import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
