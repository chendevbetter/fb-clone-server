import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('works');
});


app.listen(PORT, () => {
  console.log('listening on', PORT);
});
