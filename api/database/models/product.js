const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cache', {
    keyword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    products:{
      type: DataTypes.JSON,
      allowNull: false,
    }
  });
};




//USAR SI NO FUNCIONA LO DE ARRIBA
// sequelize.define('product', {
//   id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   title:{
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price:{
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   currency_id:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     },
//     available_quantity:{
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   thumbnail:{
//     type: DataTypes.TEXT, //para guardar imagenes en base64 REVEER O AVERIGUAR COMO SUBIR IMAGENES
//     allownull: true,
//   },
//   condition:{
//       type: DataTypes.STRING,
//       allowNull: false,
//       },
// });
// };

// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const {Model, DataTypes} = require('sequelize');
// const sequelize = require ('../db.js')

// class Product extends Model {
//     Product

// }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

