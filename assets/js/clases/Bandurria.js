import Animal from "./Animal.js";

// Bandurria es hijo de Animal
export default class Bandurria extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Chillar() {
    this.reproducirSonido();
  }
}
