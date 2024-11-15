interface User1 {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UpdateProps = Pick<User1, 'name' | 'email' | 'createdAt'>;

type UpdatePropsOptional = Partial<UpdateProps>
const user1: UpdatePropsOptional = {
    name: "dhyey1015",
    email: "test@gmail.com",
    createdAt: new Date(),
};

function displayUserProfile1(user: UpdatePropsOptional){
    console.log(`Name: ${user.name}, Email: ${user.email}, Created-On: ${user.createdAt}`);
}

displayUserProfile1(user1);

