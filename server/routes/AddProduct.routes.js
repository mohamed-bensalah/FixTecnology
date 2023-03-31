const AddProductController = require("../controllers/AddProduct.controllers")




module.exports = (app) => {
    app.get("/api/allAddProduct", AddProductController.findAllAddProduct)
    app.post("/api/PostNewAddProduct", AddProductController.CreateAddProduct)
    app.get("/api/oneAddProduct/:AddProduct_id", AddProductController.findOneAddProduct)
    app.delete("/api/deleteOneAddProduct/:AddProduct_id", AddProductController.DeleteOneAddProduct)
    app.put("/api/UpdateOneAddProduct/:AddProduct_id", AddProductController.UpdateOneAddProduct)

}
