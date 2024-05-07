import { Prisma } from '@prisma/client';
import { Hono } from 'hono';
import { PrismaClient } from './client';

const app = new Hono();
const prisma = new PrismaClient({
  errorFormat: 'pretty'
});

app.get('/hello', (c) => {
  return c.text('Hello from QbiQ!')
});

app.get('/meta', (c) => {
  return c.json(Prisma.dmmf.datamodel.models)
});

app.get('meta/:model', (c) => {
  const model = c.req.param("model");
  const refs = (prisma as any)[model]['fields'];
  if (refs) {
    return c.json(refs);
  } else {
    return c.json({});
  }
})


export default app;
