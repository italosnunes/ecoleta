import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Helo World' }));

export default routes;
