// const { urlencoded } = require('express')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    nombre: {type: String,},
    descripcion: {type: String},
    imagen: {type: String},
    categoría: {type: String},
    talla: {type: String},
    precio: {type: Number} 
}, {timestamps: true})

const products = mongoose.model('products', productSchema)

module.exports = products

