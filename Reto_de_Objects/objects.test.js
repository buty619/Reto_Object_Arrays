import { tienda, tiendaOnline, nombres, stock } from "./objects";

const successPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;34m\x1b[38;5;15m";
const failPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;208m\x1b[38;5;15m";

describe("testing reto de Objects", () => {
  let testStatus = false;
  let passTests = 0;
  let failedTest = 0;

  afterEach(() => {
    if (testStatus) {
      passTests += 1;
    } else {
      failedTest += 1;
    }

    testStatus = false;
  });

  afterAll(() => {
    const success =
      "🚀🚀 EXCELENTE TRABAJO COMPLETASTE LA PRUEBA DE MANERA SATISFACTORIA ESTE ES EL CÓDIGO SECRETO: UBITSJSOB98012 🚀🚀 \x1b[0m";
    const error =
      "❌❌ AUN NO HAS SUPERADO LA PRUEBA POR FAVOR VERIFICA QUE CUMPLAS CON TODOS LOS CRITERIOS SOLICITADOS ❌❌ \x1b[0m";
    if (failedTest > 0) {
      console.log(`${failPrintStyle} ${error}`);
    } else {
      console.log(`${successPrintStyle} ${success}`);
    }
  });

  it("1. Crear un método en el objeto `tienda` llamado `agregarProducto`que permita agregar mas productos al array de productos.", () => {
    const output = {
      nombre: "producto 2",
      descripcion: "esta es la descripción del producto 2",
      precio: 999,
      stock: 10,
    };
    tienda.agregarProducto(output);
    expect(tienda.productos[1].nombre).toBe(output.nombre);
    expect(tienda.productos[1].descripcion).toBe(output.descripcion);
    expect(tienda.productos[1].precio).toBe(output.precio);
    expect(tienda.productos[1].stock).toBe(output.stock);
    testStatus = true;
  });
  it("2. Crear un método en el objeto `tienda` llamado `obtenerProducto` que reciba como parámetro el nombre del producto y devuelva el objeto correspondiente.", () => {
    const output = {
      nombre: "producto 1",
      descripcion: "esta es la descripción del producto 1",
      precio: 999,
      stock: 10,
    };
    expect(tienda.obtenerProducto("producto 1").nombre).toBe(output.nombre);
    expect(tienda.obtenerProducto("producto 1").descripcion).toBe(
      output.descripcion
    );
    expect(tienda.obtenerProducto("producto 1").precio).toBe(output.precio);
    expect(tienda.obtenerProducto("producto 1").stock).toBe(output.stock);
    testStatus = true;
  });
  it("3. Crear un método en el objeto `tienda` llamado `realizarVenta` que reciba como parámetros el nombre del producto y la cantidad vendida, y actualice la cantidad de stock correspondiente.", () => {
    const output = {
      nombre: "producto 1",
      descripcion: "esta es la descripción del producto 1",
      precio: 999,
      stock: 4,
    };
    tienda.realizarVenta(output.nombre, 6);
    expect(tienda.productos[0].nombre).toBe(output.nombre);
    expect(tienda.productos[0].descripcion).toBe(output.descripcion);
    expect(tienda.productos[0].precio).toBe(output.precio);
    expect(tienda.productos[0].stock).toBe(output.stock);
    testStatus = true;
  });
  it("4. Crear una función llamada `eliminarProducto` que reciba como parámetro el nombre del producto y lo elimine de la lista de productos.", () => {
    const initialArray = tienda.productos.length;
    tienda.eliminarProducto("producto 1");
    const newArray = tienda.productos.length;
    expect(newArray).toBe(initialArray - 1);
    testStatus = true;
  });
  it("5. Utilizar el método `Object.create` para crear un nuevo objeto llamado `tiendaOnline`.", () => {
    expect(tiendaOnline.online).toBe(true);
    tiendaOnline.agregarStock("producto 2", 5);
    expect(tiendaOnline.productos[0].stock).toBe(15);
    tiendaOnline.realizarVenta("producto 2", 5);
    expect(tiendaOnline.productos[0].stock).toBe(10);
    testStatus = true;
  });
  it("6. Utilizar el método `Object.keys` para obtener un array con los nombres de todos los productos en stock de la `tiendaOnline`.", () => {
    expect(nombres[0]).toBe("nombre");
    expect(nombres[1]).toBe("descripcion");
    expect(nombres[2]).toBe("precio");
    expect(nombres[3]).toBe("stock");
    testStatus = true;
  });
  it("7. Utilizar el método `Object.values` para obtener un array con todas las cantidades de stock disponibles de la tiendaOnline.", () => {
    expect(stock[0]).toBe(10);
    testStatus = true;
  });
});
