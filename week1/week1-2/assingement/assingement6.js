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