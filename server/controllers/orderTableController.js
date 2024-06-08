const {Orders} = require('../products/products')
const ApiError = require('../error/errors');

class OrderTableController {
    async create(req, res, next) {
        try {
            let {products, totalPrice, userId} = req.body
            const order = await Orders.create({products, totalPrice, userId});
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const orders = await Orders.findAll()
        return res.json(orders)
    }
    async deleteById(req, res) {
        try {
            let { id } = req.query; 
            await Orders.destroy({ where: { id } });
            return res.sendStatus(204); 
        } catch (error) {
            console.error('Error deleting product from basket:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
   
}

module.exports = new OrderTableController()