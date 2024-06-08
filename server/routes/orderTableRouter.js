const Router = require('express')
const router = new Router();
const orderTableController = require('../controllers/orderTableController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', orderTableController.create)
router.get('/', orderTableController.getAll)
router.delete('/', orderTableController.deleteById)

module.exports = router