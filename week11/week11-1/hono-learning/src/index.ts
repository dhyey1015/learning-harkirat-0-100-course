import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()
async function authMiddlewar(c: any, Next: any){
  if(c.req.header('Authorization')){
    await Next()
  } else {
    return c.text("You do not have access!!");
  }
}

app.post('/',authMiddlewar, async function(c) {
  const body = await c.req.json();

  console.log(body);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('params'));
    
  return c.text('Hello Hono!')
});

export default app
