const {Flavour, Basket} = require('../products/products')
const errors = require('../error/errors')

class flavourController {
    async create(req, res) {
        const {name} = req.body
        const flavour = await Flavour.create({name})
        return res.json(flavour)
    }
    async getAll(req, res) {
        const flavours = await Flavour.findAll()
        return res.json(flavours)
    }
   
    

}

module.exports = new flavourController();