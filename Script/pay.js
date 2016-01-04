"use strict";

var hoursperweek;
var payrate;
var totalpay;
var overtime;
var overtimepay;
var standardpay;

hoursperweek = window.prompt ("Please enter hours per week", "37");
payrate = window.prompt ("Please enter hourly pay rate", "22.50");
overtime = (hoursperweek-40)
overtimepay = (payrate*1.5*overtime)+(payrate*(hoursperweek-overtime));
standardpay = (hoursperweek*payrate);

if (overtime > 0) { 
    totalpay = Math.round (overtimepay *100)/100;
    console.log ("hoursperweek=", hoursperweek);
    console.log ("payrate=", payrate);
    console.log ("hours affected by overtime=", overtime);
    console.log ("totalpay=", totalpay);
}
else {
    totalpay = Math.round (standardpay*100)/100;
    console.log ("hoursperweek=", hoursperweek);
    console.log ("payrate=", payrate);
    console.log ("totalpay=", totalpay);
}