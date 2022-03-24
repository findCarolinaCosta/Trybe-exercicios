interface Automobile {
  model: string
  brand: string
  color: string
  doors: number
  speed: number
  turnOn: () => void
  turnOff: () => void
  speedUp: () => void
  speedDown: () => void
  stop: () => void
}