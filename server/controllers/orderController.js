const {BasketProduct} = require('../products/products')
const ApiError = require('../error/errors');

class OrderController {

    async deleteAll(req, res) {
        try {
            let { userId} = req.query; 
            await BasketProduct.destroy({ where: { userId} });
            return res.sendStatus(204); 
        } catch (error) {
            console.error('Error deleting product from basket:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new OrderController()