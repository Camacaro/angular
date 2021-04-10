/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "New York, USA");
  }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman);

// Heroe {nombre: "Tony", direccion: "New York, USA", alterEgo: "Ironman", edad: 45, nombreReal: "Tony"}
