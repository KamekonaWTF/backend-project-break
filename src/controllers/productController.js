const products = require('../models/Product.js')
const formulario = require('../templates/formulario.js')


const getProducts = async (req, res) => {
    try {
        const articulos = await products.find();
        res.send(articulos);
    } catch(error) {
        res.status(500).json({error: error.message})
    }
};

const getProductById = async (req, res) => {
    try{
        const id = req.params._id
        const articulo = await products.findById(id);
        res.send(articulo)
    } catch(error) {
        res.status(500).send({message:'El articulo con número' + req.params._id + 'no ha sido encontrado'})
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
        res.json({mensaje: 'El producto ha sido eliminado del inventario'})
    } catch(error) {
        res.status(404).json({error:'El articulo no ha sido encontrado'})
    }
};



module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct, showNewProduct}