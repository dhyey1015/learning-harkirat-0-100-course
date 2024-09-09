const call = setTimeout(print, 3000);
console.log("time setted by us 3000 after that function should execute ");
const start_time = Date.now();

function print(){
    const end_time = Date.now();
    const time_taken  = end_time - start_time;
    console.log("hello world!");
    console.log("actual time taken to start executing function: " + time_taken + " milliseconds");
}
 