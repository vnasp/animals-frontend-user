import Animal from "./Animal.js";

// Aguila es hijo de Animal
export default class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Chillar() {
    this.reproducirSonido();
  }
}
