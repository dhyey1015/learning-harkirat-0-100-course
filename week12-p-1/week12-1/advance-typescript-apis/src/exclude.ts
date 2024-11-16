type Event1 = 'click' | 'scroll' | 'mousemove';
type EventExclude = Exclude<Event1, 'scroll'>;

function handleEvent(event: EventExclude){
    console.log(`Handling Event: ${event}`)
}

handleEvent('mousemove')