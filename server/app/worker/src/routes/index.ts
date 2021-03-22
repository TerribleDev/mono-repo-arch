import { Router } from 'express';
import UserRouter from './Users';
import WorkerRouter from './Worker';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/worker', WorkerRouter);

// Export the base-router
export default router;
