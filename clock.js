//diGital Functio will hold all storage
function digitalClock() {
  //using Javascript build in Object Date for var value
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();
   
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  //variables for day 
  let months = ["January","February","March", "April","May","June", "July","August","September","October","November", "December"
  ];
  let today = fullDate.getDate();
//getting date 
  document.getElementById("months").innerHTML = months[fullDate.getMonth()];
  console.log(today);
}
//called function to stop time from delaying on page being refreshed
digitalClock() 
setInterval(digitalClock, 1000);
