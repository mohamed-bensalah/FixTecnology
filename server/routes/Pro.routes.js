const ProController = require("../controllers/Pro.controllers")




module.exports = (app) => {
    app.get("/api/allPro", ProController.findAllPro)
    app.post("/api/PostNewPro", ProController.CreatePro)
    app.get("/api/onePro/:Pro_id", ProController.findOnePro)
    app.delete("/api/deleteOnePro/:Pro_id", ProController.DeleteOnePro)
    app.put("/api/UpdateOnePro/:Pro_id", ProController.UpdateOnePro)
}
