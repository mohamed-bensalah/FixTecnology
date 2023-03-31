const { Video } = require("../models/Video.models")


//Create a Video
module.exports.CreateVideo = (req, res) => {
    Video.create(req.body)
        .then(newVideo => { res.json({ Video: newVideo}) })
        .catch(err => res.status(400).json(err))
}

//Read Video
module.exports.findAllVideo = (req, res) => {
    Video.find()
        .then(Video => { res.json(Video) })
        .catch(err => res.status(400)
        )
}

// Get One Video
module.exports.findOneVideo = (req, res) => {
    Video.findOne({ _id: req.params.Video_id })
        .then(oneVideo => res.json(oneVideo))
        .catch(err => res.status(400).json(err))
}



//Delete One Video
module.exports.DeleteOneVideo = (req, res) => {
    Video.deleteOne({ _id: req.params.Video_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One Video

module.exports.UpdateOneVideo = (req, res) => {
    Video.findOneAndUpdate({ _id: req.params.Video_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

