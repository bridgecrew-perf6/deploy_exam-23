const {Core} = require('../models/core.model');

module.exports.createProduct = (req,res) =>{
    const {title,price,description} = req.body;

    Core.create({
        title,
        price,
        description

    })
    .then(product => res.json(product))
    .catch(err=>res.json(err))
}

module.exports.getAllProducts = (req,res) => {
    Core.find({})
        .then(product => res.json(product))
        .catch(err=>res.json(err))
}

module.exports.getProduct = (req,res) => {
    Core.findOne({_id:req.params.id})
        .then(product => {
            res.json(product)
            // console.log(product)
        })
        .catch(err=>{
            res.status(400).send('Error Id no disponible en la base de datos')
            // console.log('entro al error' +err)
            // res.json(err)
        })
}

module.exports.updateProduct = (req,res) => {
    Core.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req,res) => {
    Core.deleteOne({_id: req.params.id})
    .then(deleteProduct => res.json(deleteProduct))
    .catch(err => res.json(err))
}