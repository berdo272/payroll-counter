"use strict";

var hoursperweek;
var payrate;

hoursperweek = window.prompt ("Please enter hours per week", "37");
payrate = window.prompt ("Please enter hourly pay rate", "22.50");

function calcOvertime(hoursperweek,payrate) {
    var overtime = (hoursperweek-40);
    return (payrate*1.5*overtime)+(payrate*(hoursperweek-overtime));
}
function calcStandard(hoursperweek,payrate) {
    return (hoursperweek*payrate);
}
    

if (hoursperweek > 40) { 
    console.log ("hoursperweek=", hoursperweek);
    console.log ("payrate=", payrate);
    console.log ("totalpay=", Math.round (calcOvertime (hoursperweek,payrate) *100)/100);
}
else {
    console.log ("hoursperweek=", hoursperweek);
    console.log ("payrate=", payrate);
    console.log ("totalpay=", Math.round (calcStandard (hoursperweek,payrate) *100)/100);
}