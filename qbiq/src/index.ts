import { Prisma } from '@prisma/client';
import { Hono } from 'hono';

const app = new Hono();

app.get('/hello', (c) => {
  return c.text('Hello from QbiQ!')
});

app.get('/meta', (c) => {
  return c.json(Prisma.dmmf.datamodel.models)
});


export default app;
