function ageCalculate() {
    var dob = Date.parse(document.getElementById("dob").value);
    var todayDate = Date.now();
    var milliseconds = todayDate - dob;
    var seconds = milliseconds / 1000;
    var minute = seconds / 60;
    var hour = minute/60;
    var day = hour/24;
    var month = day / 30.4368
    var year = month / 12

    yearOut=Math.round(year);
    document.getElementById("year").innerHTML= yearOut;

    monthOut=Math.round(month);
    document.getElementById("month").innerHTML= monthOut;

    dayOut=Math.round(day);
    document.getElementById("day").innerHTML= dayOut;

    hourOut=Math.round(hour);
    document.getElementById("hour").innerHTML= hourOut;

    minuteOut=Math.round(minute);
    document.getElementById("minute").innerHTML= minuteOut;

    secondsOut=Math.round(seconds);
    document.getElementById("seconds").innerHTML= secondsOut;

    millisecondsOut=Math.round(milliseconds);
    document.getElementById("milliseconds").innerHTML= millisecondsOut;


}

