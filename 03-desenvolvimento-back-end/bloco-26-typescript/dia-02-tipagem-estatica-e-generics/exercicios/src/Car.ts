import Colors from "./Colors"
import Doors from "./Doors"
import Directions from './Directions'

interface ICar {
  _brand: string
  _color: Colors
  _doors: number
}

class Car implements ICar {
  _brand: string
  _color: Colors
  _doors: number

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand
    this._color = color
    this._doors = doors
  }

  turnOn(): void {
    console.log("Ligando carro.")
  }

  turnOff(): void {
    console.log("Desligando carro.")
  }

  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}.`)
  }

  speedUp(): void {
    console.log("Acelerando carro.")
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.")
  }

  stop(): void {
    console.log("Parando carro.")
  }

  honk(): void {
    console.log("Buzinando: BIP BIP")
  }

  openTheDoor(door: Doors): void {
    if (this._doors !== 2 && this._doors !== 4) {
      throw Error('Escolha quantidade de portas válidas 2 ou 4');
    }
    console.log(`Abrindo a porta: ${door}.`)
  }

  closeTheDoor(door: Doors): void {
    if (this._doors !== 2 && this._doors !== 4) {
      throw Error('Escolha quantidade de portas válidas 2 ou 4');
    }
    console.log(`Fechando a porta: ${door}.`)
  }

}

export default Car