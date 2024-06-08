//file for db connection

const {Sequelize} = require('sequelize') //module is too big, we need only this class
module.exports = new Sequelize( //object export that we creating from this class
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}
); 