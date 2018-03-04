/* eslint-disable no-console, no-unused-vars */
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { excelFilter } = require('./utils');
const { parseSchedule } = require('./parseExcel');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: excelFilter,
});
const app = express();

app.get('/test', (req, res) => {
  res.send('hello');
});

app.post(
  '/schedule',
  cors(),
  (req, res, next) => {
    console.log('Received request');
    next();
  },
  upload.single('schedule'),
  async (req, res, next) => {
    try {
      const jobArr = await parseSchedule(req.file.buffer);
      res.json(jobArr);
    } catch (err) {
      next(err);
    }
  },
);

app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
