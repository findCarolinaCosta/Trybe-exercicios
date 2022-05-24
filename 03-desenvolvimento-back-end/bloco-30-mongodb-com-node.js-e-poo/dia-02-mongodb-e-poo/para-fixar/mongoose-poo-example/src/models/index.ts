// essa interface garante que, caso o banco de dados utilizado seja modificado e as classes que realizam o acesso ao banco implementem essa interface, o resto do código pode se manter inalterado
export interface IModel<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id_: string): Promise<T | null>;
}
