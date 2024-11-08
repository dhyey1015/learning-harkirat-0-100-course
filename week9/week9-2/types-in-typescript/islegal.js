function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var x = isLegal(19);
console.log(x);
