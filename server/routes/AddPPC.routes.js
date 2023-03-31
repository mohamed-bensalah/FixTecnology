const AddPPCController = require("../controllers/AddPPC.controller")




module.exports = (app) => {
    app.get("/api/allAddPPC", AddPPCController.findAllAddPPC)
    app.post("/api/PostNewAddPPC", AddPPCController.CreateAddPPC)
    app.get("/api/oneAddPPC/:AddPPC_id", AddPPCController.findOneAddPPC)
    app.delete("/api/deleteOneAddPPC/:AddPPC_id", AddPPCController.DeleteOneAddPPC)
    app.put("/api/UpdateOneAddPPC/:AddPPC_id", AddPPCController.UpdateOneAddPPC)

}
