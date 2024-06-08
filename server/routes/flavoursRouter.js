const Router = require('express')
const router = new Router();
const flavourController = require('../controllers/flavourController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), flavourController.create)
router.get('/', flavourController.getAll)



module.exports = router