let dayPlacer = document.getElementById("day");
let DaysOfWeeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday", 
];
let todayDate = new Date();
let todayDay = todayDate.getDay();
dayPlacer.innerHTML = 'Today is ' + DaysOfWeeks[todayDay];



let datePlacer = document.getElementById("time");

/**function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getUTCHours());
  let m = addZero(d.getUTCMinutes());
  let s = addZero(d.getUTCSeconds());
  let timeToday = h + ":" + m + ":" + s;**/
timeToday = todayDate.getUTCMilliseconds;
datePlacer.innerHTML = 'The time is ' + timeToday

