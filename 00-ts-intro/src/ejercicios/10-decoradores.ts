/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

// Expande la clase y le añade funcionalidades a MiSuperClase
@classDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );
// Lo puede imprimir, pero no lo reconoce
// console.log( miClase.newProperty );