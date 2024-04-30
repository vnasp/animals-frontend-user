import Animal from "./Animal.js";

// Puma es hijo de Animal
export default class Puma extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Aullar() {
    this.reproducirSonido();
  }
}
