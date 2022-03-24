interface House {
  _owner: string
  _address: string
}

class House {
  constructor(owner: string, address: string) {
    this._owner = owner
    this._address = address
  }
}