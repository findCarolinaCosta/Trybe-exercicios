export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

type rhombus = {
  D: number,
  d: number,
}

export function rhombus ({D, d}: rhombus ): number {
  return (D * d) / 2;
}

type Point = {
  B: number;
  b: number;
  h: number;
}

export const rapezoid = ({ B, b, h }: Point ): number => ((B + b) * h) / 2

export const circle = (r: string ): number => {
  console.log( 2 * Number('3,14') * Number(r));
  return 2 * Number('3,14') * Number(r)
}