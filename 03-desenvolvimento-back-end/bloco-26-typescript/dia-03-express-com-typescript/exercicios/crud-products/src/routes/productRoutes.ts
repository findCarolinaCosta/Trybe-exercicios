import { Router } from 'express';
import PostController from '../controllers/productController';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

const postController = new PostController();
const productSlashId = '/product/:id';

router.get('/products/validity', postController.getUnexpiredProducts);
router.get('/products/search/price', validateProduct, postController.getFilterByPrice);
router.get('/products', postController.getAll);
router.get(productSlashId, postController.getById);
router.post('/products/', validateProduct, postController.create);
router.put(productSlashId, validateProduct, postController.update);
router.delete(productSlashId, postController.destroy);

export default router;