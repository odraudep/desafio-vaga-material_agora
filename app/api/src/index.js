import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.get('/', (req, res) => {
  res.json({ msg: 'hi' });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
