//diGital Functio will hold all storage
function digitalClock() {
  //using Javascript build in Object Date for var value
  let fullDate = new Date();
  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  let second = fullDate.getSeconds();
  let btn= document.getElementById("button");
  // let time="am";
  // if (hour>=12){
  //   time="pm";
  //   hour=hour -12;
  // }
  // if (hour ==0){
  //   hour =12;
  // }
  
//displaying todays date/ //adding 1 due to months going 0-11 in Javascript
  let date = fullDate.getMonth() + 1 +"-" +fullDate.getDate() + "-" + fullDate.getFullYear();

  //grabbing the id of the span to give variable value from html document
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;
  //gsetting todays date
  
  document.getElementById("day").innerHTML = date;
  btn.addEventListener("click",function(){
  console.log("clicked")
  });


};
  //will make time run every second
  setInterval(digitalClock, 1000);
    

//called function to stop time from delaying on page
digitalClock();
