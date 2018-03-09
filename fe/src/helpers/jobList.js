import jobStatusEnum from './jobStatusEnum';
const job3TaskList = [];

function pad2(n) {
  return (n < 10) ? `0${n}` : n;
}

function addJob3Task(count, day) {
  job3TaskList[count] = {
    id: `3.${count + 1}`,
    type: 'Check',
    date: `${pad2(day)}/01/2018`,
  };
}

addJob3Task(0, 2);
addJob3Task(1, 4);

for (let i = 8, j = 2; i + 2 <= 31; i += 7, j += 3) {
  for (let x = 0, y = i; x < 3 && y <= 31; y += 2, x += 1) {
    addJob3Task(j + x, y);
  }
}

// TODO:
// add 'createdOn'
// add 'lastModified'
const jobList = [
  {
    id: '1',
    trade: 'Building & Civil',
    component: 'Grass-cutting',
    scope: 'Grass-cutting, Monthly',
    status: jobStatusEnum.COMPLETED,
    taskList: [{
      id: '1.1',
      type: 'Escort',
      date: '15/01/2018',
    },
    {
      id: '1.2',
      type: 'Escort',
      date: '16/01/2018',
    },
    {
      id: '1.3',
      type: 'Escort',
      date: '17/01/2018',
    },
    {
      id: '1.4',
      type: 'Escort',
      date: '18/01/2018',
    },
    {
      id: '1.5',
      type: 'Escort',
      date: '19/01/2018',
    }],
  },
  {
    id: '2',
    trade: 'Building & Civil',
    component: 'Horticultural (Landscaping)',
    scope: 'Prunning (Tree/Hedges/Shrubs/Groundcovers), Monthly',
    status: jobStatusEnum.IN_PROGRESS,
    taskList: [{
      id: '2.1',
      type: 'Escort',
      date: '22/01/2018',
    },
    {
      id: '2.2',
      type: 'Escort',
      date: '23/01/2018',
    },
    {
      id: '2.3',
      type: 'Escort',
      date: '24/01/2018',
    }],
  },
  {
    id: '3',
    trade: 'Building & Civil',
    component: 'Cleaning Services',
    scope: 'Office Cleaning, Alternate Day',
    status: jobStatusEnum.NOT_STARTED,
    taskList: job3TaskList,
  },
  {
    id: '4',
    trade: 'Electrical',
    component: 'Standby Generators & Powerhouses',
    scope: 'Maintenance, Weekly',
    status: jobStatusEnum.COMPLETED,
    taskList: [{
      id: '4.1',
      type: 'Escort',
      date: '02/01/2018',
    },
    {
      id: '4.2',
      type: 'Escort',
      date: '09/01/2018',
    },
    {
      id: '4.3',
      type: 'Escort',
      date: '16/01/2018',
    },
    {
      id: '4.4',
      type: 'Escort',
      date: '23/01/2018',
    },
    {
      id: '4.5',
      type: 'Escort',
      date: '30/01/2018',
    }],
  },
];
export default jobList;
