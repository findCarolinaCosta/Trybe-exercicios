import Colors from "./Colors"
import Doors from "./Doors"
import Directions from './Directions'

type DOORS  = 2 | 4

interface ICar {
  _brand: string
  _color: Colors
  _doors: DOORS
}

class Car implements ICar {
  _brand: string
  _color: Colors
  _doors: DOORS

  constructor(brand: string, color: Colors, doors: DOORS) {
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
    console.log(`Abrindo a porta: ${door}.`)
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta: ${door}.`)
  }

}

export default Car