"use strict";
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const x = isLegal(19);
console.log(x);
