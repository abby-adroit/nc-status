const moment = require('moment');

export const getCurrentDayDateMonthYear = () => moment().format('ddd DD MMMM YYYY');
export const getCurrentHHourMin = () => moment().format('HH:mm');