import { eliminarAnimal, limpiarFormulario } from "./Mantencion.js";

// Función para modificar el DOM y renderizar el animal agregado
export default function Renderizar(animales) {
  const divAnimales = document.getElementById("Animales");
  divAnimales.innerHTML = "";

  animales.forEach((animal, index) => {
    const divAnimal = document.createElement("div");
    divAnimal.classList.add("card", "col-3");
    divAnimal.innerHTML = `
      <div class="card-body">
      <img src="./assets/img/${animal.Img}" alt="${animal.Nombre}" class="card-img-top"  data-toggle="modal" data-target="#exampleModal">
      </div>
      <div class="card-footer">
      <btn class="btn--reproducir"><img src="./assets/img/audio.svg" class="audio"></img></btn>
      <btn class="btn--eliminar">X</btn>
      </div>
    `;
    const btnReproducir = divAnimal.querySelector(".btn--reproducir");
    btnReproducir.addEventListener("click", () => animal.reproducirSonido());

    const btnEliminar = divAnimal.querySelector(".btn--eliminar");
    btnEliminar.addEventListener("click", () =>
      eliminarAnimal(animales, index)
    );

    const abrirModal = divAnimal.querySelector(".card-img-top");
    abrirModal.addEventListener("click", () =>
      mostrarDetalleAnimal(animales, index)
    );

    divAnimales.appendChild(divAnimal);
  });
  limpiarFormulario();
}

function mostrarDetalleAnimal(animales, index) {
  const animal = animales[index];
  const modalBody = document.querySelector("#animalModal .modal-body");
  modalBody.innerHTML = `
    <img src="./assets/img/${animal.Img}" alt="${animal.Nombre}" class="img-fluid">
    <h4>${animal.Nombre}</h4>
    <p>${animal.Edad}</p>
    <p class="modal-comments">${animal.Comentarios}</p>
  `;
  $("#animalModal").modal("show");
}
