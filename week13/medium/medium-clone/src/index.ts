import { Hono } from 'hono'

const app = new Hono()

app.get('np', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hon  o!')
})

app.post('/api/v1/blog', (c) =>{
  return c.text('heelo');
})


app.put('/api/v1/blog', (c) => {
  return c.text('ehl');
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('ebdcu');
})

app.get('/api/v1/blog/bulk', (c)=> {
  return c.text('huduc')
})
export default app
