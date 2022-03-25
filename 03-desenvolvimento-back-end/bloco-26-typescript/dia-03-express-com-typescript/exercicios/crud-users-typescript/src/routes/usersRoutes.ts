import { Router } from 'express';
import UserController from '../controllers/usersController'

const router = Router();

const userController = new UserController();
const userSlashId = '/user/:id'

router.get('/users', userController.getAll);
router.get(userSlashId, userController.getById);

export default router;