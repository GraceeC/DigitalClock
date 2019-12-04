let isMilitary = true;
//diGital Functio will hold all storage
function digitalClock() {
  //using Javascript build in Object Date for var value
  let fullDate = new Date();
  let hour = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();
  let dt = document.getElementById("day");


  let month = fullDate.getMonth();
  let currentDate = fullDate.getDate();
  let year = fullDate.getFullYear();


  //displaying todays date/ //adding 1 due to months going 0-11 in Javascript
  let date = `${month + 1}-${currentDate}-${year}`;

  if (hour > 12) {
    (hour = hour - 12);
  }


  //grabbing the id of the span to give variable value from html document
  document.getElementById("hours").innerHTML = formatTimeNumber(hour) + ':';
  document.getElementById("minutes").innerHTML = formatTimeNumber(minutes) + ':';
  document.getElementById("seconds").innerHTML = formatTimeNumber(seconds);
  //gsetting todays date

  document.getElementById("day").innerHTML = date;
  dt.addEventListener("click", function () {
    console.log("clicked");
  });
}
//will make time run every second
setInterval(digitalClock, 1000);
//called function to stop time from delaying on page
digitalClock();


function formatTimeNumber(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }

}

document.getElementById('toggelBtn').addEventListener('click', function (e) {
  console.log('button was clicked');
  if (isMilitary == false) {
    (isMilitary == true)
  }

});
