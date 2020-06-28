function colorClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var backgroundColor = seconds + ((minutes*60) % 360);
  
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    document.body.style.background = "hsl("+ backgroundColor +", 100%, 50%)";
    document.getElementById('clock').style.color = "hsl("+ backgroundColor +", 100%, 50%)";
  
    var clockFace = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').innerHTML = clockFace;
  
    setTimeout(function() {
      colorClock();
    }, 1000);
  }
  colorClock();
  