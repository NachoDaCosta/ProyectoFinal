const express = require('express');
const router = express.Router();
const db = require('../models/index')

router.get('/pokemones',(req,res) => { //busco todos los productos
    const pokemones = db.pokemones
    pokemones.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})


router.get('/pokemones/:id', (req, res) => {  //busco un producto especifico por si id
    let idN = req.params.id
    const pokemones = db.pokemones
    pokemones.findAll({
        where:{
            id: idN
        }
    })
    .then(data => {
        if (data.length > 0){
            res.send(data)
        }
        else{
            res.status(404).send({message: 'Pokemon no encontrado'})
        }
      })
    .catch(err => {res.status(400).send({message: err.message})})
})


/*router.post('/pokemons',(req,res)=>{  //ingreso un pokemon para mi
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
