const AppsController = require("../controllers/Apps.controllers")




module.exports = (app) => {
    app.get("/api/allApps", AppsController.findAllApps)
    app.post("/api/PostNewApps", AppsController.CreateApps)
    app.get("/api/oneApps/:Apps_id", AppsController.findOneApps)
    app.delete("/api/deleteOneApps/:Apps_id", AppsController.DeleteOneApps)
    app.put("/api/UpdateOneApps/:Apps_id", AppsController.UpdateOneApps)
}
