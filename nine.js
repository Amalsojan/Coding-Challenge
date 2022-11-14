const readline = require('readline-sync');
var dobarray =[];
var age =[];
for(var i = 0; i <=4; i++) 
{
    dob = readline.question("Enter the D-O-B  :format(dd:mm:yyyy) ")
    dobarray.push(dob);
}
console.log(dobarray);

for(let i=0;i<dobarray.length;i++)
{
    let year = (dobarray[i].split('-'));
    age.push(2022 - parseInt(year[2]));
}

console.log(age);

for(let i=0;i<age.length;i++)
{
if(age[i]<10)
{
    console.log("id");
}
else if(age[i] >=10 && age[i] <30)
{
    console.log("youth");
}

else if(age[i] >=30 && age <60)
{
    console.log("Adult");
}

else
{
    console.log("Older");

}
}


