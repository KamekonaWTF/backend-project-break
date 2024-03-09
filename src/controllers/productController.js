const products = require('../models/Product.js')
const {formulario, getProductCards} = require('../templates/formulario.js')


const getProducts = async (req, res) => {
    try {
        const articulos = await products.find();
        const getArtHtml = getProductCards(articulos)
        res.send(getArtHtml);
    } catch(error) {
        res.status(500).json({error: error.message})
    }
};

const getProductById = async (req, res) => {
    try{
        const id = req.params.productId
        const articulo = await products.findById(id);
        const productPage = `
            <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Tienda de ropa</title>
                    <link rel="stylesheet" href="/styles.css">
                </head>
                <body>
                <div class="topnav">
                    <a href="">Dashboard</a>
                    <a href="edit">Contact</a>
                    <a href="#about">About</a>
                </div>
                <div class="product-info">
                <img src="${articulo.imagen}" alt="${articulo.nombre}">
                <h2>${articulo.nombre}</h2>
                <p>${articulo.descripcion}</p>
                <p>${articulo.precio}€</p>
                </div>      
                
                </form>
                </body>
                </html>
        `
        res.send(productPage)
    } catch(error) {
        res.status(500).send({message:'El articulo con número ' + req.params._id + ' no ha sido encontrado'})
    }
};

const showNewProduct = async(req, res) => {
    try {
        const formTemp = formulario;
        res.send(formTemp)
    } catch (error) {
        res.status(400).json({error:'Error al cargar el formulario'})
    }
};

const createProduct = async (req, res) => {
    try {
        const articuloAlmacenado = await products.create(req.body);
        res.status(201).json(articuloAlmacenado)
    } catch(error) {
        res.status(400).json({error:'No se ha podido resolver su solicitud'})
    }
};


const updateProduct = async (req, res) => {
    try {
        const id = req.params._id;
        const articuloActualizado = await products.findByIdAndUpdate(id, req.body, {new:true});
            res.json(articuloActualizado)
    } catch(error) {
        res.status(404).json({error:'El articulo no ha sido encontrado'})
    }
};

const deleteProduct = async (req, res) => {
    try{
        const id = req.params._id;
        const deletedProduct= await products.findByIdAndDelete(id);
        res.json({mensaje: 'El producto ha sido eliminado del inventario', deletedProduct})
    } catch(error) {
        res.status(404).json({error:'El articulo no ha sido encontrado'})
    }
};



module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct, showNewProduct}