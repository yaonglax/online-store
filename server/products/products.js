const sequelize = require('../db') 
const {DataTypes} = require('sequelize') //DataTypes - описание типов полей

const User = sequelize.define('user', {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
email: {type: DataTypes.STRING, unique: true},
password: { type: DataTypes.STRING, unique: true},
role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const BasketProduct = sequelize.define('basket_products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
})
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}

})
const ProductInfo = sequelize.define('prod_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})
const Flavour = sequelize.define('flavour', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})
const Orders = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    products: {type: DataTypes.STRING, allowNull: false},
    totalPrice: {type: DataTypes.INTEGER, allowNull: false}
})

Flavour.hasMany(Product);
Product.belongsTo(Flavour);
Category.hasMany(Product);  
Product.belongsTo(Category);  
Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);
User.hasMany(BasketProduct);
BasketProduct.belongsTo(User);
Product.hasMany(ProductInfo, {as: 'info'});
ProductInfo.belongsTo(Product);
User.hasMany(Orders);
Orders.belongsTo(User)

module.exports = {
    User,
    BasketProduct,
    Product,
    ProductInfo,
    Category,
    Flavour,
    Orders
}