// const { urlencoded } = require('express')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Nombre: {type: String, required: true},
    Descripcion: {type: String, required: true},
    Imagen: {type: String, required: true},
    Categoría: {type: String, required: true},
    Talla: {type: Number, required: true},
    Precio: {type: Number, required: true}
}, {timestamps: true})

const products = mongoose.model('products', productSchema)

module.exports = products

