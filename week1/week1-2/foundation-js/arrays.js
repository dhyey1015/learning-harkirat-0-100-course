const ages = [21,22,23,24,25,26];

for(let i = 0; i < ages.length; i++) //<----- .length is 
{
    if (ages[i]%2 !== 0)//<--- for odd if (ages[i]%2 == 0)<--- for even
    {
        console.log(ages[i]);
    }
}