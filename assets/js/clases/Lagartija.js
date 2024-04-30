import Animal from "./Animal.js";

// Lagartija es hijo de Animal
export default class Lagartija extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Sisear() {
    this.reproducirSonido();
  }
}
