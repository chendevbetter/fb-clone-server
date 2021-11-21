import express from 'express';
import { attachMiddlewares } from '../middlewares';

const PORT = process.env.PORT || 5000;

const app = express();

attachMiddlewares(app);

app.listen(PORT, () => {
  console.log('listening on', PORT);
});
