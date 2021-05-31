function colorClock(){
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var monthname = date.toLocaleString("en", { month: "long" })
  var year = date.getFullYear();

  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }
  var clockFace = year + '.' + monthname + ' ' + hours + ':' + minutes + ':' + seconds;
  var hexColor = '#' + hours + minutes + seconds;
  var hexColor2 = '#' + seconds + hours + minutes;

  document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = hexColor;
  //document.body.style.color = hexColor2;

  setTimeout(function() {
    colorClock();
  }, 1000);
}
colorClock();