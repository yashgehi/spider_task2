let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
// let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
// let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
let seconds = 0;
let minutes = 4;
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function () {
    time++;
    if (minutes == 0 && seconds == 0) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "end.html";
    }
    if (seconds == 0) {
        seconds = 59;
        minutes--;
    } else {

        seconds--;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`
    document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
}, 1000);