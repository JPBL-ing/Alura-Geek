const URL = "http://localhost:3001/products";

const ListaProductos = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la lista de productos:", error);
  }
};

const CrearProducto = async (name, price, image) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image }),
    });

    const data = await response.json();
    console.log("Solicitud POST exitosa:", data);
    return data;
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
  }
};

const EliminarProducto = async (id) => {
  try {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Producto con id ${id} eliminado exitosamente`);
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
  }
};

export const servicesProducts = {
  productList: ListaProductos,
  createProduct: CrearProducto,
  deleteProduct: EliminarProducto,
};
