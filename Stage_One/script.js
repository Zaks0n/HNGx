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
timeToday = todayDate.getUTCMilliseconds();
  
datePlacer.innerHTML = 'The time is ' + timeToday;
