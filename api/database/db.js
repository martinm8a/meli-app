require('dotenv').config();

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;



const {Sequelize} = require ("sequelize")


const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/meli`, {
  
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
});

module.exports = sequelize