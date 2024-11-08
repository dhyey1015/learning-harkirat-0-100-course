"use strict";
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
function sum1() {
    const x = 1 + 2;
    console.log(x);
    return x;
}
runAfter1S(sum1);
