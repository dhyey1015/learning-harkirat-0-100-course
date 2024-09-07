const arr = [1,2,3,4,5]

left = 0;
right = arr.length -1;

while(left < right)
{
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}