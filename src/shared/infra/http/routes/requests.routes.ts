import { Router } from 'express';

import GoalsController from '../controllers/GoalsController';

const goalsController = new GoalsController();

const requestsRouter = Router();

requestsRouter.post('/', goalsController.create);
requestsRouter.get('/', goalsController.index);

export default requestsRouter;
