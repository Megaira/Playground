// *************************************
// Conversion h h:m m:s s:ms ms -> ms
// *************************************
var h = 5;
var min = 23;
var s = 17;
var ms = 328;
// 1 s = 1000 ms
// 1 h = 60 min/h * 60 s/min = 3600 s
// 1 min = 60 s

var t = (h * 60 * 60 * 1000) + (min *60 * 1000) + (s * 1000) + ms;
console.log(h + 'h:' + min + 'min:' + s + 's:' + ms + 'ms = ' + t + 'ms');
// *************************************
// Conversion ms -> h h:m m:s s:ms ms
// *************************************
var time = 19397328;
var hours, minutes, seconds, mseconds;
// helper variable for whole seconds in timeCounter:
var sec;
// whole seconds in timeCounter
sec = Math.floor(time/1000);
// Remaining ms after conversion to seconds:
mseconds = time%1000;
// Whole hours in remaining seconds:
hours = Math.floor(sec/3600);
// Whole minutes in remaining seonds (sec%3600) after whole hours are subtracted:
minutes = Math.floor((sec%3600)/60);
//remaining seconds
seconds = ((sec%3600)%60);

console.log(hours + 'h:' + minutes + 'min:' + seconds + 's:' + mseconds + 'ms');

// **** no helper variable ****
var timeCounter = 19397328;
var timeHours, timeMinutes, timeSeconds, timeMsec;

var time = 19397328;
var stunde, minute, sekunde, msekunde;

timeMsec = timeCounter%1000;
timeHours = Math.floor((timeCounter/1000)/3600);
timeMinutes = Math.floor(((timeCounter/1000)%3600)/60);
timeSeconds= Math.floor(((timeCounter/1000)%3600)%60);


console.log(timeHours + 'h:' + timeMinutes + 'min:' + timeSeconds + 's:' + timeMsec + 'ms');

