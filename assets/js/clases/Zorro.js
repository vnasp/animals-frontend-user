import Animal from "./Animal.js";

// Zorro es hijo de Animal
export default class Zorro extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Gruñir() {
    this.reproducirSonido();
  }
}
