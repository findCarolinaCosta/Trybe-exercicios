// propriedades id , nome, nome da marca, preço, data de fabricação e data de validade;
interface IPRODUCT {
  id?: number;
  name: string,
  brandName: string,
  price: number,
  manufacturingDate?: Date | string,
  expirationDate?: Date | string,
}

export default IPRODUCT;