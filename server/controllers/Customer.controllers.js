const { user } = require("../models/user.model")


//Create a Customer
module.exports.CreateCustomer = (req, res) => {
    Customer.create(req.body)
        .then(newCustomer => { res.json({ Customer: newCustomer}) })
        .catch(err => res.status(400).json(err))
}

//Read Customer
module.exports.findAllCustomer = (req, res) => {
    Customer.find()
        .then(Customer => { res.json(Customer) })
        .catch(err => res.status(400)
        )
}

// Get One Customer
module.exports.findOneCustomer = (req, res) => {
    Customer.findOne({ _id: req.params.Customer_id })
        .then(oneCustomer => res.json(oneCustomer))
        .catch(err => res.status(400).json(err))
}



//Delete One Customer
module.exports.DeleteOneCustomer = (req, res) => {
    Customer.deleteOne({ _id: req.params.Customer_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One Customer

module.exports.UpdateOneCustomer = (req, res) => {
    Customer.findOneAndUpdate({ _id: req.params.Customer_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

