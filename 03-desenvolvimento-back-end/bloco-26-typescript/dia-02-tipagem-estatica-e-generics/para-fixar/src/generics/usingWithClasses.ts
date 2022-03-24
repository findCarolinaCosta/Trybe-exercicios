class ProcessIdentity2<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
  }
  getIdentity() : T {
      console.log(this._message);
      return this._value
  }
}

let processorClass = new ProcessIdentity2<number, string>(100, "Olá");
processorClass.getIdentity();  // imprime "Olá" e retorna 100