let Timebx = document.getElementById("clock")
let dayBX = document.getElementById("day")


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

dayBX.innerHTML += `${day}`


function updateTime(){
 
let d = new Date()
let hours = d.getHours()
let min = d.getMinutes()
let sec = d.getSeconds()

let twelvehours = hours % 12 || 12
const amOrPm = hours >= 12 ? 'PM' : 'AM';

 Timebx.innerHTML = `${twelvehours}: ${min}: ${sec} ${amOrPm}`

}

updateTime()
setInterval(updateTime, 1000)