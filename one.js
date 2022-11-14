const input=require('readline-sync');
var data = [];
var names;
for(let i=0;i<=4;i++)
{
    names = input.question("Enter the firstname ")
    data.push(names)

}
var duplicate = [...data];

var temp="" ;
    
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
console.log(data);


//descending order

for(let i=0;i<data.length;i++)
{
    for(let j=0;j<data.length-i-1;j++)
    {
            if(data[j]<data[j+1])
            {
                temp=data[j];
                data[j]=data[j+1];
                data[j+1]=temp;
            }
    }

}
console.log(data);

//search
var check = input.question(`enter name to be searched : `);
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

// length of each elements
console.log("  ");
console.log("length of each elements : ")

for(let i=0;i<duplicate.length;i++)

{
 console.log(`${duplicate[i]} = length ${duplicate[i].length}`)
}

console.log("  ");


// spliting


for(let i=0;i<duplicate.length;i++)

{
    let name1 = duplicate[i].split(' ');
    console.log(name1);
}


console.log("  ");
//find duplicate elements

console.log("duplicate elements : ")

for(let i=0;i<duplicate.length;i++)

{
    for(let j=i+1;j<duplicate.length;j++)
    {
        if(duplicate[i] == duplicate[j])
        {
            console.log(`${duplicate[i]} in position ${i+1}`);
        }
    }
}