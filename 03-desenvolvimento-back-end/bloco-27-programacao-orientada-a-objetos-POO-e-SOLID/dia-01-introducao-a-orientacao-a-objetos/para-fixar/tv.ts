//1. Crie uma classe chamada Tv, com os atributos: brand, size, resolution, connections, connectedTo
class Tv {
  // 5. Altere a visibilidade dos atributos definidos na classe Tv para private 
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }
  //2. Dentro da classe Tv, crie o método turnOn , que imprimirá os atributos inicializados no construtor.
  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }
// 6. Crie um método getter e um setter para o atributo _connectedTo , da classe Tv.
  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

//3. Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
const tv1 = new Tv('SAMSUNG', 32, '4K', ['HDMI', 'Wi-Fi']);
tv1.turnOn();

// 7. Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);