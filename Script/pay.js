"use strict";

var hoursperweek;
var payrate;

hoursperweek = window.prompt ("Please enter hours per week", "37");
payrate = window.prompt ("Please enter hourly pay rate", "22.50");

function calcOvertime(hoursperweek,payrate) {
    return (payrate*1.5*(hoursperweek-40))+(payrate*(hoursperweek-(hoursperweek-40)));
}
function calcStandard(hoursperweek,payrate) {
    return (hoursperweek*payrate);
}
function PushOvertime(hoursperweek, payrate){
	console.log ("hoursperweek=", hoursperweek);
    console.log ("payrate=", payrate);
    console.log ("totalpay=", Math.round (calcOvertime (hoursperweek,payrate) *100)/100);
}
function PushStandard(hoursperweek, payrate){
	 console.log ("hoursperweek=", hoursperweek);
    console.log ("payrate=", payrate);
    console.log ("totalpay=", Math.round (calcStandard (hoursperweek,payrate) *100)/100);
}
function checkIfOvertime(hoursperweek){
if (hoursperweek > 40) { 
PushOvertime(hoursperweek, payrate)
}
else {
 PushStandard(hoursperweek, payrate)  
}
}
checkIfOvertime(hoursperweek)