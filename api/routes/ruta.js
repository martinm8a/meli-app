var express =  require ('express');
// const sequelize = require ('./database/db.js')
const bodyParser = require("body-parser")
const server = express()
const axios = require("axios");



// Ruta hacia el endpoint >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
server.get("/api/search", (req, res) => {
  const xProduct = req.query.q;
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${xProduct}`)
    .then((xProducts) => {
      const arrayProd = xProducts.data.results;
      let products = arrayProd.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          currency_id: product.currency_id,
          available_quantity: product.available_quantity,
          thumbnail: product.thumbnail,
          condition: product.condition,
        };
      });
      res.send(products);
    })
    .catch((err) => {
      return res.send(err, console.log("Hay un error")).status(400);
    });
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = server;


// server.listen(5001, () => {
//     console.log("%s listening at 3001"); // eslint-disable-line no-console
//     sequelize
//               .authenticate()
//               .then(() => {
//                 console.log('Se ha conectado correctamente.');
//               })
//               .catch(err => {
//                 console.error('No se puede conectar a la base de datos:', err);
//               });
//   });
  
//   console.log('Server esuchando en puerto: 5001');