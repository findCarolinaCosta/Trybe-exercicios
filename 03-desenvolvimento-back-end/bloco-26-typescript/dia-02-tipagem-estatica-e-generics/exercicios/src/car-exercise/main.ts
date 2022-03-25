import Car from "./Car"
import Colors from "./Colors"
import Directions from "./Directions"
import Doors from "./Doors"


const gol = new Car("Volkswagen", Colors.SILVER, 4)

gol.openTheDoor(Doors.DRIVER)
gol.closeTheDoor(Doors.DRIVER)
gol.turnOn()
gol.speedUp()
gol.speedDown()
gol.turn(Directions.LEFT)
gol.speedUp()
gol.speedDown()
gol.turn(Directions.RIGHT)
gol.speedUp()
gol.speedDown()
gol.turn(Directions.RIGHT)
gol.speedDown()
gol.stop()
gol.openTheDoor(Doors.BACKDOORRIGHT)
gol.closeTheDoor(Doors.BACKDOORRIGHT)
gol.speedUp()
gol.speedDown()
gol.turn(Directions.RIGHT)
gol.speedUp()
gol.speedDown()
gol.turn(Directions.LEFT)
gol.speedUp()
gol.speedDown()
gol.turn(Directions.RIGHT)
gol.speedDown()
gol.stop()
gol.openTheDoor(Doors.BACKDOORRIGHT)
gol.closeTheDoor(Doors.BACKDOORRIGHT)
gol.speedUp()