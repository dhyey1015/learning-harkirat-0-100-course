
//it is difficult to handle more than one array at a time so we use array of object 
// const personArray = ["dhyey", "riddhi", "zero-two", "kira"];
// const genderArray = ["male", "female", "female", "male"];


// this how you define object
// const users = {
//     first_name : "Dhyey",
//     gender : "male"
// } 

//this is how we define array of objects

const allUsers = [
    {
        first_name : "Dhyey",
        gender : "male"
    }, 
    {
        first_name: "riddhi",
        gender : "female"
    },
    {
        first_name: "zero-two",
        gender: "female"
    },
    {
        first_name: "ayanokoji",
        gender: "male"
    }

];

for(let i = 0; i < allUsers.length; i++)
{
    if (allUsers[i]["gender"] == "male")
    {
        console.log(allUsers[i]["first_name"]);
    }
}