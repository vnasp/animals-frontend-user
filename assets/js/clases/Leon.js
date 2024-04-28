import Animal from "./Animal.js";

// Leon es hijo de Animal
export default class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  get Rugir() {
    this.reproducirSonido();
  }
}
