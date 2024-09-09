let counter = 30

setInterval(count, 1000)

function count()
{
    console.log(counter);
    counter--;

    stopCount(counter)
}

function stopCount(counter)
{
    if(counter < 0)
    {
        console.log("complete count")
        clearInterval(count);
    }
}


