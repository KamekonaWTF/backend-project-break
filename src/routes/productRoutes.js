const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController.js')

router.get('/products', productController.getProducts);

router.get('/products/:productId', productController.getProductById);

router.post('/dashboard', productController.createProduct);

router.get('/dashboard/new', productController.showNewProduct)

router.put('/dashboard/:productId', productController.updateProduct);

router.delete('/dashboard/:productId/delete', productController.deleteProduct);

module.exports = router





/*
- GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
- GET /products/:productId: Devuelve el detalle de un producto.
- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
- POST /dashboard: Crea un nuevo producto.
- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
- PUT /dashboard/:productId: Actualiza un producto.
- DELETE /dashboard/:productId/delete: Elimina un producto.
*/