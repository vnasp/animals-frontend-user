import Animal from "./Animal.js";

// Lobo es hijo de Animal
export default class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Aullar() {
    this.reproducirSonido();
  }
}
