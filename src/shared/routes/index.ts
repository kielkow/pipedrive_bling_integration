import { Router } from 'express';

import requestsRouter from './requests.routes';

const routes = Router();

routes.use('/requests', requestsRouter);

export default routes;
