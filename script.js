

setInterval(function clock() {
    let d = new Date();
    let hour = (d.getHours() % 12) * 30 + (d.getMinutes() / 2); // Each hour is 30 degrees, and each minute adds 0.5 degrees.
    let minute = d.getMinutes() * 6; // Each minute is 6 degrees.
    let second = d.getSeconds() * 6; // Each second is 6 degrees.

    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
}, 1000);