const VideoController = require("../controllers/Video.controllers")




module.exports = (app) => {
    app.get("/api/allVideo", VideoController.findAllVideo)
    app.post("/api/PostNewVideo", VideoController.CreateVideo)
    app.get("/api/oneVideo/:Video_id", VideoController.findOneVideo)
    app.delete("/api/deleteOneVideo/:Video_id", VideoController.DeleteOneVideo)
    app.put("/api/UpdateOneVideo/:Video_id", VideoController.UpdateOneVideo)

}
