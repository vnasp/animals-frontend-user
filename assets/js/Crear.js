import Chinchilla from "./clases/Chinchilla.js";
import Puma from "./clases/Puma.js";
import Bandurria from "./clases/Bandurria.js";
import Zorro from "./clases/Zorro.js";
import Lagartija from "./clases/Lagartija.js";
import Renderizar from "./Renderizar.js";
import { obtenerDatosPorEspecie } from './CargarDatos.js';

let animales = [];

// Función para obtener los valores del formularioe
export async function agregarAnimal() {
  const especie = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;
  if (!especie || !edad || !comentarios) {
    alert("Debes completar todos los campos para un avistamiento exitoso.");
    return;
  }

  // Buscamos los datos multimedia del animal seleccionado
  try {
    const mediaData = await obtenerDatosPorEspecie(especie);
    // Si nos devuelve algo, llamamos a la función que crea el objeto Animal y le pasamos todos los datos recopilados
    if (mediaData) {
      Crear(especie, edad, comentarios, mediaData);
    } else {
      alert("No se encontraron datos para la especie seleccionada");
    }
  } catch (error) {
    console.error("Error en el proceso de agregar el animal:", error);
  } finally {
    const cuadernillo = document.getElementById("cuadernillo");
    cuadernillo.classList.remove("d-block");
  }
}

// Instanciamos para crear un objeto con toda la información del animal, lo agregamos al array y renderizamos
export function Crear(especie, edad, comentarios, mediaData) {
  let animal;
  if (especie === "Chinchilla") {
    animal = new Chinchilla(especie, edad, mediaData.imagen, comentarios, mediaData.sonido);
  } else if (especie === "Puma") {
    animal = new Puma(especie, edad, mediaData.imagen, comentarios, mediaData.sonido);
  } else if (especie === "Zorro") {
    animal = new Zorro(especie, edad, mediaData.imagen, comentarios, mediaData.sonido);
  } else if (especie === "Bandurria") {
    animal = new Bandurria(especie, edad, mediaData.imagen, comentarios, mediaData.sonido);
  } else if (especie === "Lagartija") {
    animal = new Lagartija(especie, edad, mediaData.imagen, comentarios, mediaData.sonido);
  } else {
    alert("No se encontraron datos para la especie seleccionada");
  }
  animales.push(animal);
  Renderizar(animales);
}
