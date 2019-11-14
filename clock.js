//diGital Functio will hold all storage
function digitalClock() {
  //using Javascript build in Object Date for var value
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();
  

  //grabbing the id of the span to give variable value from html document
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  digitalClock();

//month array
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  document.getElementById("clock").innerHTML = months[fullDate.getMonth()];
  //getting todays date
}
//called function to stop time from delaying on page being refreshed

setInterval(digitalClock, 1000);
