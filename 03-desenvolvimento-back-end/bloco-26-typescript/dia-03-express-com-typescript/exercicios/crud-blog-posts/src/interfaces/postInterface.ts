// propriedades id , título, nome do autor, nome da categoria e data de criação;
interface IPOST {
  id?: number;
  authorName: string,
  title: string,
  category: string,
  createdAt?: Date | string,
}

export default IPOST;