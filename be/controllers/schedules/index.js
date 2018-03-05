const express = require('express')
    , router = express.Router()
    , multer = require('multer')
    , cors = require('cors');
    
const parseSchedule = require('../../services/parse-schedule');

const upload = multer({
   storage: multer.memoryStorage(),
   fileFilter: require('../../helpers/file-filter'),
});

/*const controllerHandler = (promise, params) => async (req, res, next) => {
                            const boundParams = params ? params(req, res, next) : [];
                            try {
                                const result = await promise(...boundParams);
                                return res.json(result || { message: 'OK' });
                            } catch (err) {
                                return res.status(500) && next(err);
                            }
                        };
*/
router.post('/upload',
            cors(),
            (req, res, next) => {
                console.log('Received request');
                next();
            },
            upload.single('schedule'),
            (req, res, next) => {
               try {
                   const jobArr = parseSchedule(req.file.buffer);
                   res.json(jobArr);
               } catch (error) {
                   next (error);
               }
            });

module.exports = router;