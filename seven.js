const input=require('readline-sync');

var flyerpoints=0;

var names = input.question("Enter the firstname ");

var miles = parseInt(input.question("Enter the miles : "));

if(miles > 10000)
{   
    flyerpoints+=10;
}

if(miles > 20000)
{
    flyerpoints+=10;
}

if(miles > 50000)
{
    flyerpoints+=10;
}

if(miles > 100000)
{
    flyerpoints+=20; 
}

console.log(names + " " + "frequent flyer points:" + flyerpoints);






