const Router = require('express')
const router = new Router();
const OrderController = require('../controllers/orderController')

router.delete('/', OrderController.deleteAll)


module.exports = router