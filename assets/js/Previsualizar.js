import { obtenerDatosPorEspecie } from './CargarDatos.js';

// Previsualizamos la imagen del animal seleccionado en formulario
export async function actualizarPreview() {

  const especie = document.getElementById("animal").value;

  if (especie) {
    try {
      // Llamamos a la función que filtra el JSON y le pasamos la especie a buscar
      const mediaData = await obtenerDatosPorEspecie(especie);
      // Si nos devuelve algo, llamamos a la función que muestra la imagen y le pasamos el nombre de la imagen
      if (mediaData) {
        mostrarPreview(mediaData.imagen);
      } else {
        console.error("No se encontraron datos para la especie seleccionada");
      }
    } catch (error) {
      console.error("Error al cargar los datos de la especie:", error);
    }
  }
}

// Función para mostrar la imagen previa del animal
export function mostrarPreview(imagen) {
  const vistaPrevia = document.getElementById("preview");
  vistaPrevia.style.setProperty("--background-url", `url('../img/${imagen}')`);
}