import { z } from 'zod';
import express  from 'express';

const app = express();

const userProfileSchema  = z.object({
    name: z.string().min(1, {message:"Name cannot be empty"}),
    email: z.string().email({message:"Email format is wrong"}),
    age: z.number().min(18, {message:"You must be atleast 18 years old"}).optional()
})

type FinalUserProfileSchema = z.infer<typeof userProfileSchema>

app.put("/user", function(req, res){
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserProfileSchema = req.body;

    if(!success){
        res.status(411).json({});
    }

    res.json({
        message:"User updated"
    });
});

app.listen(3000)
