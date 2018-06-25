// Jan 1st 1970 00:00:00 am
const moment = require('moment');


// const date = new Date();
// console.log(date.getMonth());

const timestamp = moment().valueOf();
console.log(timestamp);
const date = moment();
console.log(date.format('MMM Do, YYYY'));

// 10:35 am

console.log(date.format('h:mm a'));