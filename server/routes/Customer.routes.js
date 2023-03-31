const CustomerController = require("../controllers/Customer.controllers")




module.exports = (app) => {
    app.get("/api/allCustomer", CustomerController.findAllCustomer)
    app.post("/api/PostNewCustomer", CustomerController.CreateCustomer)
    app.get("/api/oneCustomer/:Customer_id", CustomerController.findOneCustomer)
    app.delete("/api/deleteOneCustomer/:Apps_id", CustomerController.DeleteOneCustomer)
    app.put("/api/UpdateOneCustomer/:Customer_id", CustomerController.UpdateOneCustomer)
}
