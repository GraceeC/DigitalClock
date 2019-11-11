//diGital Functio will hold all storage
function digitalClock(){
//using Javascript build in Object Date for var value
const fullDate = new Date();
const hours = fullDate.getHours();
const minutes = fullDate.getMinutes();
const seconds = fullDate.getSeconds();
console.log(fullDate);

//grabbing the id of the span to give var value from document
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;
}
