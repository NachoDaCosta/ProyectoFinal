const express = require('express');
const router = express.Router();
const db = require('../models/index')

/*router.get('/products',(req,res) => { //busco todos los productos
    const Products = db.Products
    Products.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})*/


/*router.get('/products/:id', (req, res) => {  //busco un producto especifico por si id
    let idN = req.params.id
    const Products = db.Products
    Products.findAll({
        where:{
            id: idN
        }
    })
    .then(data => {
        if (data.length > 0){
            res.send(data)
        }
        else{
            res.status(404).send({message: 'Producto no disponible'})
        }
      })
    .catch(err => {res.status(400).send({message: err.message})})
})*/


/*router.post('/pokemons',(req,res)=>{  //ingreso un producto
    const Pokemons = db.Pokemons
    let produ = {
        product_name: req.body.product_name,
        category: req.body.category,
        image: req.body.imagen,
        price:req.body.price
    }
    Products.create(produ)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error, por favor intente nuevamente'})
    })
})*/



module.exports = router ;
