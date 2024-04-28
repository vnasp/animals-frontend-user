import Animal from "./Animal.js";

// Serpiente es hijo de Animal
export default class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Sisear() {
    this.reproducirSonido();
  }
}
