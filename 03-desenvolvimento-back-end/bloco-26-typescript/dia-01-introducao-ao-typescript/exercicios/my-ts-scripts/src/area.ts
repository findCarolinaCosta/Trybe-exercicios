import utils from './utils'

const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

const convert = (value: number, forUnity: string, toUnity: string): number =>  utils.convert(units, value, forUnity, toUnity)
