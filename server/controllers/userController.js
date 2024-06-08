const errors = require('../error/errors')
const bcrypt = require('bcrypt');
const { User, Basket } = require('../products/products');
const jwt = require('jsonwebtoken')
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(errors.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(errors.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        // const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        // await Basket.update({ token }, { where: { userId: user.id } });
        return res.json({token}); 
        
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(errors.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(errors.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        // let basket = await Basket.findOne({ where: { userId: user.id } });
        // if (!basket) {
        //     basket = await Basket.create({ userId: user.id });
        // }
        return res.json({token});
    }
    async check(req, res, next) {
   const token = generateJwt(req.user.id, req.user.email, req.user.role)
   return res.json({token})
    }
}

module.exports = new userController();