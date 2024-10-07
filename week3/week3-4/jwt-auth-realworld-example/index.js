const jwt = require("jsonwebtoken")

const value = {
    name: "xyz",
    accountNumber: 123123
}
//generate
const token =  jwt.sign(value, "secret");
console.log(token)

//this token has been generated using this "secret", and hence this token can only
// be verified  using this "secret"
