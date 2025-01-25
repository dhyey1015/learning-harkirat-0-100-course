import { PrismaClient } from "@prisma/client/edge";
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

blogRouter.put('/edit-blog', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.blog.update({
            where:{
                id: body.id
            },
            data:{
                title: body.title,
                content: body.content,
            }
        });
        c.status(204);
        return c.json({
            message: "your blog updated successfully",
            "your_updated_blog's_id": blog.id
        });
    } catch(e){
        c.status(404);
        return c.json({
            message: "something when wrong",
            "error": `${e}`
        })
    }
});
   
blogRouter.get('/get-id-blog', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

   try{
        const blogs = await prisma.blog.findMany();
        c.status(200)
        return c.json({
            blogs
        })
   } catch (e){
        c.status(404);
        return c.json({
            message: "something when wrong",
            "error": `${e}`
        })
   }
});
  //TODO: add pagination
blogRouter.get('/all-blog', async (c)=> {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id: body.id
            }
        });
        c.status(200)
        return c.json({
            blog
        })
    } catch (e){
        c.status(404);
        return c.json({
            message: "something when wrong",
            "error": `${e}`
        })
    }
});
