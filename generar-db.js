// generar-db.js
const fs = require('fs');

const productos = [];
const nombres = [
  'Mouse', 'Teclado', 'Monitor', 'Laptop', 'USB', 'Impresora', 
  'Disco Duro', 'Router', 'Webcam', 'Auriculares', 'Tablet'
];

for (let i = 1; i <= 100; i++) {
  const name = nombres[Math.floor(Math.random() * nombres.length)] + ' ' + i;
  const price = Math.floor(Math.random() * 100000) + 1000; // entre 1.000 y 100.000
  const stock = Math.floor(Math.random() * 20); // entre 0 y 19
  productos.push({ id: i, name, price, stock });
}

const db = { products: productos };

fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('db.json generado con 100 productos');
