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

// app.post('/schedule', cors(), (req, res) => {
//   // const jobArr = await parseSchedule(req.file.buffer);
//   console.log('Received request');

//   upload.single('schedule')(req, res, async (err) => {
//     if (err) {
//       console.log(err);

//       if (req.fileFormatError) {
//         res.status(500).send({ error: req.fileFormatError });
//         console.log(req.fileFormatError);
//         return;
//       }

//       res.status(500).send({ error: 'Error in file upload.' });
//       return;
//     }

//     try {
//       const jobArr = await parseSchedule(req.file.buffer);
//       res.json(jobArr);
//     } catch (e) {
//       console.log(`Error parsing excel file: ${e}`);
//       res.status(500).send({ error: 'Error parsing excel file.' });
//     }
//   });
// });

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

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
