import Animal from "./Animal.js";

// Oso es hijo de Animal
export default class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Gruñir() {
    this.reproducirSonido();
  }
}
