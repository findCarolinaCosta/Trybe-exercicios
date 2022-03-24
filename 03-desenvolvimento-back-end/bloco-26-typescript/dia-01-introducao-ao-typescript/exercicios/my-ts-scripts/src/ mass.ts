import utils from './utils'

let units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"]

const convert = (value: number, forUnity: string, toUnity: string): number =>  utils.convert(units, value, forUnity, toUnity)