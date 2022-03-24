import utils from './utils'

const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

const convert = (value: number, forUnity: string, toUnity: string): number =>  utils.convert(units, value, forUnity, toUnity)
