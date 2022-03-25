type Bird = {
  id: number,
  species: string,
  regionalLocation: string
}

type Sum = (valueA: number, valueB: number) => number;

type Address = {
  street?: string,
  avenue?: string,
  number: number,
  zipCode: number,
  city: string,
  state: string
  country: string,
}