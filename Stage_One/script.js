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
dayPlacer.innerHTML = DaysOfWeeks[todayDay];



let datePlacer = document.getElementById("time");


timeToday = todayDate.getTime();
  
datePlacer.innerHTML = timeToday;

