require('dotenv').config({ path: '/easy bake/server/.env' });

const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 5000;
const products = require('./products/products');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandle');
const path = require('path')
const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json({}));
app.use(fileUpload());

app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
        console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
    }
}
start();
