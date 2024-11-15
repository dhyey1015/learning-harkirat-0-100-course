import { Hono } from 'hono'

const app = new Hono()

app.post('/', async function(c) {
  const body = await c.req.json();

  console.log(body);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('params'));
    
  return c.text('Hello Hono!')
})

export default app
