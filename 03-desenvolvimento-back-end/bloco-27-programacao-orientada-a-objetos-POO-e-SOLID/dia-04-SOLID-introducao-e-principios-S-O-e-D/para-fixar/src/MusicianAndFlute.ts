interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }
  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  // Agora a flauta é recebida como parâmetro
  // com um valor padrão caso nenhuma seja passada
  constructor(
    public name: string,
    public flute: Instrument = new Flute('Minha flauta')
  ) { } // cria a posibilidade de passar parâmtro "mockado"

  play() {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();