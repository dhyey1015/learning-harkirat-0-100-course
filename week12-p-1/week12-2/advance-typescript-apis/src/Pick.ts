//`pick` allows you to create a new type by selecting a set of properties (Keys)
//type(Type)
//imagine u have  a User model with several properties, but for a user profile display,
// you only need a subnet of these propperties

interface User1 {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UserProfile = Pick<User1, 'name' | 'email' | 'createdAt'>;

const user: User1 = {
    id: 1,
    name: "dhyey1015",
    email: "test@gmail.com",
    createdAt: new Date(),
};
function displayUserProfile(user: UserProfile){
    console.log(`Name: ${user.name}, Email: ${user.email}, Created-On: ${user.createdAt}`);
}

displayUserProfile(user);

