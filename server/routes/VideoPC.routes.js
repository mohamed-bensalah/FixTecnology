const VideoPcController = require("../controllers/videoPC.controller")




module.exports = (app) => {
    app.get("/api/allVideoPC", VideoPcController.findAllVideoPc)
    app.post("/api/PostNewVideoPC", VideoPcController.CreateVideoPc)
    app.get("/api/oneVideoPC/:VideoPC_id", VideoPcController.findAllVideoPc)
    app.delete("/api/deleteOneVideoPC/:VideoPC_id", VideoPcController.DeleteOneVideoPc)
    app.put("/api/UpdateOneVideoPC/:VideoPC_id", VideoPcController.UpdateOneVideoPc)

}
