import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        SECRET_KEY: string;
    }
}>()
// authentication same as middle where check for the authorizartion token in headers
// if found verify it, if okay the extract data from it and pass that data to end point function

//-------------------------authentication-Hono-syntax-----------------------------
// blogRouter.use("/*", (c, next) => {
//     next();
// });

blogRouter.post('/new-blog', async (c, next) =>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    // next();
    try {
        const blog = await prisma.blog.create({
            data:{
                title: body.title,
                content:  body.content,
                authorId: 1
            }
        })
        c.status(201)
        return c.json({
            "message": "Successfully created blog post",
            "created_blog_id": blog.id
        })
    } catch (e){
        c.status(400)
        return c.json({
            "message": "Some unexpected error occurred",
            "error": `${e}`
        })
    }
    
});

blogRouter.put('/edit-blog', (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    return c.text('ehl');
});
   
blogRouter.get('/:id', (c) => {
    return c.text('ebdcu');
});
  
blogRouter.get('/all-blog', (c)=> {
    return c.text('huduc');
});
