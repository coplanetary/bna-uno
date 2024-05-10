import { Hono } from 'hono';
import { PrismaClient, Prisma } from './client';

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
  const prismModel = (prisma as any)[model];
  if (prismModel) {
    return c.json(prismModel['fields']);
  } else {
    return c.json({});
  }
});


export default app;
