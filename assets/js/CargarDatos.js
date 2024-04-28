let datosAnimales = []

const cargarDatos = (function () {
  // Función que carga todos los datos iniciales del JSON
  async function cargarDatosIniciales() {
    try {
      const response = await fetch("./animales.json");
      const data = await response.json();
      datosAnimales = data.animales;
    } catch (error) {
      console.error("Error al cargar los datos iniciales:", error);
    }
  }
  // Ejecutamos la carga de datos iniciales inmediatamente
  cargarDatosIniciales();
})();

// Función para obtener los datos por especie
export function obtenerDatosPorEspecie(especie) {
  return datosAnimales.find((animal) => animal.name === especie);
}

export default cargarDatos;
