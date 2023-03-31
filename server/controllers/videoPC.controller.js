const { VideoPc } = require("../models/VideoPc.models")


//Create a VideoPc
module.exports.CreateVideoPc = (req, res) => {
    VideoPc.create(req.body)
        .then(newVideoPc => { res.json({ VideoPc: newVideoPc}) })
        .catch(err => res.status(400).json(err))
}

//Read VideoPc
module.exports.findAllVideoPc = (req, res) => {
    VideoPc.find()
        .then(VideoPc => { res.json(VideoPc) })
        .catch(err => res.status(400)
        )
}

// Get One VideoPc
module.exports.findOneVideoPc = (req, res) => {
    VideoPc.findOne({ _id: req.params.VideoPc_id })
        .then(oneVideoPc => res.json(oneVideoPc))
        .catch(err => res.status(400).json(err))
}



//Delete One VideoPc
module.exports.DeleteOneVideoPc = (req, res) => {
    VideoPc.deleteOne({ _id: req.params.VideoPc_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One VideoPc

module.exports.UpdateOneVideoPc = (req, res) => {
    VideoPc.findOneAndUpdate({ _id: req.params.VideoPc_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

