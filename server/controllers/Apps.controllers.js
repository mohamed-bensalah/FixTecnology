const { Apps } = require("../models/Apps.models")


//Create a fix
module.exports.CreateApps = (req, res) => {
    Apps.create(req.body)
        .then(newApps => { res.json({ Apps: newApps}) })
        .catch(err => res.status(400).json(err))
}

//Read Apps
module.exports.findAllApps = (req, res) => {
    Apps.find()
        .then(Apps => { res.json(Apps) })
        .catch(err => res.status(400)
        )
}

// Get One Apps
module.exports.findOneApps = (req, res) => {
    Apps.findOne({ _id: req.params.Apps_id })
        .then(oneApps => res.json(oneApps))
        .catch(err => res.status(400).json(err))
}



//Delete One Apps
module.exports.DeleteOneApps = (req, res) => {
    Apps.deleteOne({ _id: req.params.Apps_id })
        .then(result => res.json("Delete with success"))
        .catch(err => res.status(400).json(err))
}

//Update One Apps

module.exports.UpdateOneApps = (req, res) => {
    Apps.findOneAndUpdate({ _id: req.params.Apps_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

