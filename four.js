const readline = require('readline-sync');
const math = require('mathjs');
var dob = readline.question('Enter Date Of Birth(eg:dd-mm-yyyy ) : ');
var dateOfBirth=dob.split('-');
var cDate = "14-11-2022";
var currentDate = cDate.split('-');
var year = currentDate[2] - dateOfBirth[2];
var months = currentDate[1] - dateOfBirth[1];
var days = currentDate[0] - dateOfBirth[0];
var tdays = 24*days;
var tmonths = 24*30*months;
var tyear = 24*365*year;
if(months < 0)
{
    var age = tyear - tmonths + tdays;
    console.log(`${math.floor(age)} hours`);
    console.log(`${math.floor(age/24)} days`);
    console.log(`${math.floor(age*0.00136986)} months`);
    console.log(`${math.floor(age*0.00011416)} years`);
}
else if(days < 0)
{
    var age = tyear + tmonths - tdays;
    console.log(`${math.floor(age)} hours`);
    console.log(`${math.floor(age/24)} days`);
    console.log(`${math.floor(age*0.00136986)} months`);
    console.log(`${math.floor(age*0.00011416)} years`);
}
else{
    var age = tyear + tmonths + tdays;
    console.log(`${math.floor(age)} hours`);
    console.log(`${math.floor(age/24)} days`);
    console.log(`${math.floor(age*0.00136986)} months`);
    console.log(`${math.floor(age*0.00011416)} years`);
    
}





