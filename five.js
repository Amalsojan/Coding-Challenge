const input=require('readline-sync');

var data = [];
var fares;
for(let i=0;i<=8;i++)
{   if(i%2==0)
    {
    fares = parseFloat(input.question("Enter the fare "));
    data.push(fares)
    }
    else
    {
        data.push(" ");
    }
}
console.log("output");
console.log(data);

