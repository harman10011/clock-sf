function displayTime(){
	var today = new Date()
    var hours = today.getHours();
    var mints = today.getMinutes();
    var seconds = today.getSeconds();
    var clockDiv = document.getElementById('jhund')
 
      if (hours < 10){
	hours = "0" + hours;
}
  if (mints < 10){
	mints = "0" + mints;
}
    if (seconds < 10){
	seconds = "0" + seconds;
}
    if (seconds >20) {
    	seconds.Color = 'red'
    }
var meridiem = "AM" 

if (hours>12){
   hours = hours-12;
   meridiem = "PM";
}

if (hours===0){
	hours = 12;
}
clockDiv.innerText = ' ' + hours + ":" + mints + ":" + seconds + " " + meridiem ;

}
setInterval(displayTime,1000)
displayTime();  

function displayDay() {
   var today = new Date()
   var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
    var day = weekday[today.getDay()];   
     var dayDiv = document.getElementById('bhinda')
    dayDiv.innerText = day
}

displayDay()