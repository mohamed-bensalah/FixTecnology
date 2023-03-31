const { Pro } = require("../models/Pro.model")


//Create a Pro
module.exports.CreatePro = (req, res) => {
    Pro.create(req.body)
        .then(newPro => { res.json({ Pro: newPro}) })
        .catch(err => res.status(400).json(err))
}

//Read Pro
module.exports.findAllPro = (req, res) => {
    Pro.find()
        .then(Pro => { res.json(Pro) })
        .catch(err => res.status(400)
        )
}

// Get One Pro
module.exports.findOnePro = (req, res) => {
    Pro.findOne({ _id: req.params.Pro_id })
        .then(onePro => res.json(onePro))
        .catch(err => res.status(400).json(err))
}



//Delete One Pro
module.exports.DeleteOnePro = (req, res) => {
    Pro.deleteOne({ _id: req.params.Pro_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One Pro

module.exports.UpdateOnePro = (req, res) => {
    Pro.findOneAndUpdate({ _id: req.params.Pro_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

