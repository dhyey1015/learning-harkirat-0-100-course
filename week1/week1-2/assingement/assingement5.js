const arr = [1,5,3,5,8,9,2,4]

let key = arr[0];
for (let i = 0; i < arr.length; i++)
{
    if(arr[i] >key)
    {
        key = arr[i];
    }
}
console.log(key);