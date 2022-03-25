import { Router } from 'express';
import UserController from '../controllers/usersController'

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAll);

export default router;