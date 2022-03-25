import Pizza from "./Pizza"
import { Vegetarian } from "./FlavorsTypes"

interface PizzaVegetarian extends Pizza {
    flavor: Vegetarian
}

export default PizzaVegetarian