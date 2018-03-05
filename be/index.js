/* eslint-disable no-console, no-unused-vars */
const express = require('express');

const app = express();

app.use(require('./controllers'));

app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
