const { AddProducts } = require("../models/AddProducts.model")


//Create a fix
module.exports.CreateAddProduct = (req, res) => {
    AddProducts.create(req.body)
        .then(newAddProduct => { res.json({ AddProduct: newAddProduct}) })
        .catch(err => res.status(400).json(err))
}

//Read AddProduct
module.exports.findAllAddProduct = (req, res) => {
    AddProducts.find()
        .then(AddProduct => { res.json(AddProduct) })
        .catch(err => res.status(400)
        )
}

// Get One AddProduct
module.exports.findOneAddProduct = (req, res) => {
    AddProducts.findOne({ _id: req.params.AddProduct_id })
        .then(oneAddProduct => res.json(oneAddProduct))
        .catch(err => res.status(400).json(err))
}



//Delete One AddProduct
module.exports.DeleteOneAddProduct = (req, res) => {
    AddProducts.deleteOne({ _id: req.params.AddProduct_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One AddProduct

module.exports.UpdateOneAddProduct = (req, res) => {
    AddProducts.findOneAndUpdate({ _id: req.params.AddProduct_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

