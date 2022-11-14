const input=require('readline-sync');

var data = [];
var fares;
for(let i=0;i<=4;i++)
{
    fares = parseFloat(input.question("Enter the fare "));
    data.push(fares)

}
console.log("original");
console.log(data);

var duplicate = [...data];

var temp="" ;
  
//ascending
for(let i=0;i<data.length;i++)
{
    for(let j=0;j<data.length-i-1;j++)
    {
            if(data[j]>data[j+1])
            {
                temp=data[j];
                data[j]=data[j+1];
                data[j+1]=temp;
            }
    }

}
console.log("ascending order...");
console.log(data);
//max
console.log("max value...");
console.log(data[data.length-1]);

//descending
for(let i=0;i<data.length;i++)
{
    for(let j=0;j<data.length-i-1;j++)
    {
            if(data[j]>data[j+1])
            {
                temp=data[j];
                data[j]=data[j+1];
                data[j+1]=temp;
            }
    }

}
console.log("descending order...");
console.log(data);

//min
console.log("min value...");
console.log(data[0]);


//search

var check = parseFloat(input.question("Enter the element to be searched"));

for(let k=0; k<duplicate.length; k++)
{  
    if(check == duplicate[k])
    {
        console.log(`${duplicate[k]} found at position ${k+1}`);
        var flag=1;
    }
    if(flag==0)
    {
        console.log("Element not found");
    }
}

//duplicate


console.log("duplicate elements : ")

for(let i=0;i<duplicate.length;i++)

{
    for(let j=i+1;j<duplicate.length;j++)
    {
        if(duplicate[i] == duplicate[j])
        {
            console.log(duplicate[i]);
            console.log(`${duplicate[i]} in position ${i+1}`);
        
        }
    }
}