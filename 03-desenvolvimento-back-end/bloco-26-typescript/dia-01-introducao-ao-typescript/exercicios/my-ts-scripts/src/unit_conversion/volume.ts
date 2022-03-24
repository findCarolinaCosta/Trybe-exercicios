import utils from './utils'

const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"]

const convert = (value: number, forUnity: string, toUnity: string): number =>  utils.convert(units, value, forUnity, toUnity)
