const Router = require('express')
const router = new Router();
const categoryRouter = require('./categoryRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const flavoursRouter = require('./flavoursRouter');
const basketProductRouter = require('./basketProductRouter')
const orderRouter = require('./orderRouter')
const orderTableRouter = require('./orderTableRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/flavour', flavoursRouter )
router.use('/basketproduct', basketProductRouter)
router.use('/order', orderRouter)
router.use('/ordertable', orderTableRouter)
module.exports = router