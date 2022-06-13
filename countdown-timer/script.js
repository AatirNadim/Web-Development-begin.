const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');
const newYears= '1 Jan 2023'
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds=(newYearsDate - currentDate)/1000;

    const days=Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60) %60;
    const myseconds=Math.floor(seconds%60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(myseconds);




    console.log(days, hours, minutes, myseconds);
    // console.log(newYearsDate-currentDate);//milliseconds
}


function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}



countdown();
//everything around here is in milliseconds

setInterval(countdown, 1000);//milliseconds 