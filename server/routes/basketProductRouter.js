const Router = require('express')
const router = new Router();
const basketProductController = require('../controllers/basketProductController')

router.post('/', basketProductController.create);
router.get('/', basketProductController.fetchWithId);
router.delete('/', basketProductController.deleteById)



module.exports = router