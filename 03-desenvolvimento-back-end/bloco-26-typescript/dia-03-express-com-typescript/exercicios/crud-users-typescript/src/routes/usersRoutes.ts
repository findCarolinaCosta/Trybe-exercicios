import { Router } from 'express';
import UserController from '../controllers/usersController';
import validationUser from '../middlewares/validationUser';

const router = Router();

const userController = new UserController();
const userSlashId = '/user/:id'

router.get('/users', userController.getAll);
router.get(userSlashId, userController.getById);
router.post('/users/', validationUser, userController.create);

export default router;