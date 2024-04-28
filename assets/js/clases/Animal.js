// Creamos clase padre Animal
export default class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get Nombre() {
    return this.#nombre;
  }
  get Edad() {
    return this.#edad;
  }
  get Img() {
    return this.#img;
  }
  get Comentarios() {
    return this.#comentarios;
  }
  set Comentarios(nuevosComentarios) {
    this.#comentarios = nuevosComentarios;
  }
  get Sonido() {
    return this.#sonido;
  }
  reproducirSonido() {
    const player = document.getElementById("player");
    player.src = `./assets/sounds/${this.#sonido}`;
    player.play();
  }
}
