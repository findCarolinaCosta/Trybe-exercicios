//1. Crie uma classe chamada Tv, com os atributos: brand, size, resolution, connections, connectedTo
class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string; //conexão atual Este atributo não precisa ser inicializado no construtor 

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }
  //2. Dentro da classe Tv, crie o método turnOn , que imprimirá os atributos inicializados no construtor.
  turnOn():void {
    console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}`);
  }
}

//3. Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
const tv1 = new Tv('SAMSUNG', 32, '4K', ['HDMI', 'Wifi']);
tv1.turnOn();