const products = require('../models/Product.js')

const getProducts = async (req, res) => {
    try {
        const articulos = await products.find();
        res.json(articulos);
    } catch(error) {
        res.status(500).json({error: error.message})
    }
};

const getProductById = async (req, res) => {
    try{
        const articulo = await products.findById(req.params.id);
        res.json(articulo)
    } catch(error) {
        res.status(404).json({error:'El articulo no ha sido encontrado'})
    }
};

const createProduct = async (req, res) => {
    const articuloNuevo = new products(req.body);
    try {
        const articuloAlmacenado = await articuloNuevo.save();
        res.status(201).json(articuloAlmacenado)
    } catch(error) {
        res.status(400).json({error:'No se ha podido resolver su solicitud'})

    }
};

const showNewProduct = async(req, res) => {
    const formTemp = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Add an article</title>
        </head>
        <body>
                <h1>Añade un artículo nuevo</h1>
                <form>
                    <label for="Nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="Descripción">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" required></textarea>

                    <label for="imagen">Imagen (URL):</label>
                    <input type="text" id="imagen" name="imagen">

                    <label for="Categoría">Categoría:</label>
                    <input type="text" id="categoria" name="categoria">

                    <label for="Talla">Talla:</label>
                    <input type="number" id="talla" name="talla" required>

                    <label for="Precio">Precio:</label>
                    <input type="number" id="precio" name="precio" required>

                    <button type="submit">Guardar</button>
                </form>
        </body>
        </html>
    `;
    res.send(formTemp)
};

const updateProduct = async (req, res) => {
    try {
        const articuloActualizado = await products.findByIdAndUpdate(req.params.id, req.body, {new:true});
            res.json(articuloActualizado)
    } catch(error) {
        res.status(404).json({error:'El articulo no ha sido encontrado'})
    }
};

const deleteProduct = async (req, res) => {
    try{
        await products.findByIdAndDelete(req.params.id);
        res.json({mensaje: 'El producto ha sido eliminado del inventario'})
    } catch(error) {
        res.status(404).json({error:'El articulo no ha sido encontrado'})
    }
};



module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct, showNewProduct}