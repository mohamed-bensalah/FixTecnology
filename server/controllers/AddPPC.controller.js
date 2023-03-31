const { AddPPC } = require("../models/AddPPC.models")


//Create a fix
module.exports.CreateAddPPC = (req, res) => {
    AddPPC.create(req.body)
        .then(newAddPPC => { res.json({ AddPPC: newAddPPC}) })
        .catch(err => res.status(400).json(err))
}

//Read AddPPC
module.exports.findAllAddPPC = (req, res) => {
    AddPPC.find()
        .then(AddPPC => { res.json(AddPPC) })
        .catch(err => res.status(400)
        )
}

// Get One AddPPC
module.exports.findOneAddPPC = (req, res) => {
    AddPPC.findOne({ _id: req.params.AddPPC_id })
        .then(oneAddPPC => res.json(oneAddPPC))
        .catch(err => res.status(400).json(err))
}



//Delete One AddPPC
module.exports.DeleteOneAddPPC = (req, res) => {
    AddPPC.deleteOne({ _id: req.params.AddPPC_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One AddPPC

module.exports.UpdateOneAddPPC = (req, res) => {
    AddPPC.findOneAndUpdate({ _id: req.params.AddPPC_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

