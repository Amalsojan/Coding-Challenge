const readline = require('readline-sync');

var flightFare = parseInt(readline.question("Enter Flight Fare : "));

var userBookingTime = readline.question("Enter Booking Time (24 hr) : ");

if(userBookingTime>6 && userBookingTime<=9)
{
    flightFare=flightFare+(flightFare*10/100);
}

if(userBookingTime>9 && userBookingTime<=17)
{
    flightFare=flightFare+(flightFare*20/100);
}

if(userBookingTime>17 && userBookingTime<=23)
{
    flightFare=flightFare+(flightFare*7/100);
}

if(userBookingTime>23 && userBookingTime<=24 && userBookingTime<=6)
{
    flightFare=flightFare+(flightFare*5/100);
}

console.log(`BOOKING TIME : ${userBookingTime}`);
console.log(`FLIGHT FARE : ${flightFare}`);