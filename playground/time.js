const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY hh:mm:ss a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = new Date().getTime();
var date = moment(createdAt);
console.log(date.format('h:mm a'));
