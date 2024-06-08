const {BasketProduct} = require('../products/products')
const ApiError = require('../error/errors');

class BasketProductController {
    async create(req, res, next) {
        try {
            let {quantity, price, productId, userId} = req.body
            const basketProduct = await BasketProduct.create({quantity, price, productId, userId})
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async fetchWithId(req, res) {
            let { userId } = req.query; 
            const basketProducts = await BasketProduct.findAll({
                where: { userId } 
            });
           
            return res.json(basketProducts);
        
    }
    async deleteById(req, res) {
        try {
            let { userId, productId } = req.query; 
            await BasketProduct.destroy({ where: { userId, productId } });
            return res.sendStatus(204); 
        } catch (error) {
            console.error('Error deleting product from basket:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
   
    
}
module.exports = new BasketProductController()