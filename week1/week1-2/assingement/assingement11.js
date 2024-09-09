function time_display()
{
    const now  = new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(hours < 10)
    {
        hours = '0' + hours;
    }
    if(minutes < 10)
    {
        minutes = '0' + minutes;
    }
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }

    const current_time = `${hours}:${minutes}:${seconds}`;
    console.log(current_time);
}

setInterval(time_display, 1000)