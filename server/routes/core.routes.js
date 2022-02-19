const CoreController = require('../controllers/core.controller');

module.exports = function(app){
    app.post('/api/product', CoreController.createProduct);  
    app.get('/api/allproducts', CoreController.getAllProducts);  
    app.get('/api/product/:id',CoreController.getProduct);
    app.put('/api/product/:id', CoreController.updateProduct);
    app.delete('/api/product/:id', CoreController.deleteProduct);
}