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
  agregarProducto: ".. aca resolver el reto ..",
  // 2. Crear un método en el objeto `tienda` llamado `obtenerProducto` que reciba como parámetro el nombre del producto y devuelva el objeto correspondiente
  obtenerProducto: ".. aca resolver el reto ..",
  // 3. Crear un método en el objeto `tienda` llamado `realizarVenta` que reciba como parámetros el nombre del producto y la cantidad vendida, y actualice la cantidad de stock correspondiente.
  realizarVenta: ".. aca resolver el reto ..",
  // 4. Crear una función llamada `eliminarProducto` que reciba como parámetro el nombre del producto y lo elimine de la lista de productos.
  eliminarProducto: ".. aca resolver el reto ..",
};

// 5. Utilizar el método `Object.create` para crear un nuevo objeto llamado `tiendaOnline`
const tiendaOnline = ".. aca resolver el reto ..";

// 6. Utilizar el método `Object.keys` para obtener un array con los nombres de las propiedades de los productos de la `tiendaOnline`.

const nombres = ".. aca resolver el reto ..";

// 7. Utilizar el método `Object.values` para obtener un array con todas las cantidades de stock disponibles de la tiendaOnline.

const stock = ".. aca resolver el reto ..";

export { tienda, tiendaOnline, nombres, stock };
