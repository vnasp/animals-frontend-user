import Animal from "./Animal.js";

// Chinchilla es hijo de Animal
export default class Chinchilla extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Rugir() {
    this.reproducirSonido();
  }
}