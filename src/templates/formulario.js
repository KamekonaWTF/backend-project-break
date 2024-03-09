const products = require('../models/Product.js')

const formulario = `   
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
        <h1>Añade un artículo nuevo</h1>
        <form action='/dashboard' method='post'>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" required></textarea>

            <label for="imagen">Imagen (URL):</label>
            <input type="text" id="imagen" name="imagen">

            <label for="categoria">Categoría:</label>
            <input type="text" id="categoria" name="categoria">

            <label for="talla">Talla:</label>
            <input type="text" id="talla" name="talla" required>

            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" required>

            <button type="submit">Guardar</button>
        </form>
        </body>
        </html>
`

function getProductCards(products) {
    let html = '';
    for (let product of products) {
      html += `
        <div class="product-card">
          <img src="${product.imagen}" alt="${product.nombre}">
          <h2>${product.nombre}</h2>
          <p>${product.descripcion}</p>
          <p>${product.precio}€</p>
          <a href="/products/${product._id}">Ver detalle</a>
        </div>
      `;
    }
    return html;
  }

/*const productPage = `
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
          <p>${product.descripcion}</p>
          <p>${product.precio}€</p>
        </div>      
        
        </form>
        </body>
        </html>
`
*/
module.exports = {
    formulario, 
    getProductCards,
    //productPage
}