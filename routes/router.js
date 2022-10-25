import express from 'express';
import { DashBoardController } from '../controllers/DashBoardController.js';

const router = express.Router();
const dashboard = new DashBoardController();

router.get('/tasks', dashboard.index);
router.post('/task/save', dashboard.store);
router.put('/task/update/:task', dashboard.update);
router.delete('/task/:task', dashboard.destroy);

export { router }