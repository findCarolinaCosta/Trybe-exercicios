import utils from './utils'

let units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

const convert = (value: number, forUnity: string, toUnity: string): number =>  utils.convert(units, value, forUnity, toUnity)