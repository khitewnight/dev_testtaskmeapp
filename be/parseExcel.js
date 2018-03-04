/* eslint-disable no-cond-assign */
const XLSX = require('xlsx');

const FREQ_COL_INDEX = 4; // E
const SCOPE_COL_INDEX = 3; // D
const DESC_COL_INDEX = 2; // C
const TRADE_COL_INDEX = 1; // B
const DATE_COL_INDEX = 0; // A

const FREQ_COL = XLSX.utils.encode_col(FREQ_COL_INDEX);
const SCOPE_COL = XLSX.utils.encode_col(SCOPE_COL_INDEX);
const DESC_COL = XLSX.utils.encode_col(DESC_COL_INDEX);
const TRADE_COL = XLSX.utils.encode_col(TRADE_COL_INDEX);
const DATE_COL = XLSX.utils.encode_col(DATE_COL_INDEX);

const DAYS_START_COL_INDEX = FREQ_COL_INDEX + 1; // F
const DAYS_END_COL_INDEX = FREQ_COL_INDEX + 31; // AJ

const HEADER_ROW_INDEX = 4;
const MONTHS_ROW_INDEX = HEADER_ROW_INDEX + 1;
const DATA_START_ROW_INDEX = HEADER_ROW_INDEX + 2;
const DATE_ROW_INDEX = 1;

const verifyAndReturnWorkbook = workbookBuffer => XLSX.read(workbookBuffer);

function monthNameToNumber(monthName) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames.indexOf(monthName) + 1;
}

function pad2(number) {
  return number < 10 ? `0${number}` : number;
}

const parseSchedule = (workbookBuffer) => {
  const workbook = verifyAndReturnWorkbook(workbookBuffer);
  const ws = workbook.Sheets[workbook.SheetNames[0]];
  const memArr = [];
  const jobArr = [];
  const wsDate = ws[DATE_COL + DATE_ROW_INDEX].v.split(' ');
  const wsDateMonthNumber = pad2(monthNameToNumber(wsDate[wsDate.length - 2]));
  const wsDateYear = `20${wsDate[wsDate.length - 1]}`;
  const COL_ARR = [null, TRADE_COL, DESC_COL, SCOPE_COL];

  let row = DATA_START_ROW_INDEX;
  let freqCell;
  let freqCellVal;
  let taskArr;

  while (freqCell = ws[FREQ_COL + row]) {
    freqCellVal = freqCell.v;
    if (freqCellVal !== 'NA') {
      for (let i = SCOPE_COL_INDEX; i >= TRADE_COL_INDEX; i -= 1) {
        if (ws[COL_ARR[i] + row]) {
          memArr[i] = ws[COL_ARR[i] + row].v;
        } else {
          break;
        }
      }

      taskArr = [];
      for (let i = DAYS_START_COL_INDEX; i <= DAYS_END_COL_INDEX; i += 1) {
        const CURR_DAY_COL = XLSX.utils.encode_col(i);
        if (ws[CURR_DAY_COL + row]) {
          if (ws[CURR_DAY_COL + row].v === 'X') {
            taskArr.push(`${pad2(ws[CURR_DAY_COL + MONTHS_ROW_INDEX].v)}/${wsDateMonthNumber}/${wsDateYear}`);
          }
        }
      }

      if (taskArr.length > 0) {
        jobArr.push({
          trade: memArr[TRADE_COL_INDEX].replace(/\r?\n|\r/g, ' '),
          jobTitle: `${memArr[DESC_COL_INDEX]}, ${memArr[SCOPE_COL_INDEX]} - ${freqCellVal}`.replace(/\r?\n|\r/g, ' '),
          taskList: taskArr,
        });
      }
    }

    row += 1;
  }

  return JSON.stringify(jobArr);
};

exports.parseSchedule = parseSchedule;
