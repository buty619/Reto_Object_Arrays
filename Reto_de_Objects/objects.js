const tienda = {
  nombre: "tu tienda",
  direccion: "av tu dirección 123",
  productos: [
    {
      nombre: "producto 1",
      descripcion: "esta es la descripción del producto 1",
      precio: 999,
      stock: 10,
    },
  ],
  // 1. Crear un método en el objeto `tienda` llamado `agregarProducto`que permita agregar mas productos al array de productos.
  agregarProducto: function (nuevoProducto) {
    this.productos = [...this.productos, nuevoProducto];
  },
  // 2. Crear un método en el objeto `tienda` llamado `obtenerProducto` que reciba como parámetro el nombre del producto y devuelva el objeto correspondiente
  obtenerProducto: function (nombreProducto) {
    return this.productos.find(
      (producto) => producto.nombre === nombreProducto
    );
  },
  // 3. Crear un método en el objeto `tienda` llamado `realizarVenta` que reciba como parámetros el nombre del producto y la cantidad vendida, y actualice la cantidad de stock correspondiente.
  realizarVenta: function (nombreProducto, cantidadVendida) {
    this.productos = this.productos.map((producto) => {
      if (producto.nombre === nombreProducto) {
        producto.stock = producto.stock - cantidadVendida;
      }
      return producto;
    });
  },
  // 4. Crear una función llamada `eliminarProducto` que reciba como parámetro el nombre del producto y lo elimine de la lista de productos.
  eliminarProducto: function (nombreProducto) {
    this.productos = this.productos.filter(
      (producto) => producto.nombre !== nombreProducto
    );
  },
};

// 5. Utilizar el método `Object.create` para crear un nuevo objeto llamado `tiendaOnline`
const tiendaOnline = Object.create(tienda);
tiendaOnline.online = true;
tiendaOnline.agregarStock = function (nombreProducto, cantidadSuma) {
  this.productos = this.productos.map((producto) => {
    if (producto.nombre === nombreProducto) {
      producto.stock = producto.stock + cantidadSuma;
    }
    return producto;
  });
};

// 6. Utilizar el método `Object.keys` para obtener un array con los nombres de las propiedades de los productos de la `tiendaOnline`.

const nombres = Object.keys(tiendaOnline.productos[0]);

// 7. Utilizar el método `Object.values` para obtener un array con todas las cantidades de stock disponibles de la tiendaOnline.

const stock = tiendaOnline.productos.map((producto) => {
  return Object.values(producto)[3];
});

export { tienda, tiendaOnline, nombres, stock };
