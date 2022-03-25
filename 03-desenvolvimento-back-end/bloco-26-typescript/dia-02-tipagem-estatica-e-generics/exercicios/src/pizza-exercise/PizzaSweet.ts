import Pizza from "./Pizza"
import { Sweet } from "./FlavorsTypes"

interface PizzaSweet extends Pizza {
    flavor: Sweet,
    slices: 4
}

export default PizzaSweet