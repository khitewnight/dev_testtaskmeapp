function excelFilter(req, file, cb) {
  // accept excel file format only
  if (!file.originalname.match(/\.(xls|xlsx)$/)) {
    return cb(new Error('Only excel files allowed'));
  }
  return cb(null, true);
}

exports.excelFilter = excelFilter;
