import { Router } from 'express';
import PostController from '../controllers/postController';
import validatePostInfos from '../middlewares/validatePost';

const router = Router();

const postController = new PostController();
const postSlashId = '/post/:id';

router.get('/posts/search', postController.getSearchTerm);
router.get('/posts', postController.getAll);
router.get(postSlashId, postController.getById);
router.post('/posts/', validatePostInfos, postController.create);
router.put(postSlashId, validatePostInfos, postController.update);
router.delete(postSlashId, postController.destroy);

export default router;