import Pizza from "./Pizza"
import { Common } from "./FlavorsTypes"

interface PizzaCommon extends Pizza {
    flavor: Common
}

export default PizzaCommon