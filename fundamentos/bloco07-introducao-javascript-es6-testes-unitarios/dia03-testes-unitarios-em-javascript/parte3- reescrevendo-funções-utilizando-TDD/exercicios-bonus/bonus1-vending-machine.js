function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  if (paid < payable) throw new Error('Valor pago não é suficiente');

  for (let index = 0; index < length; index += 1) {
    const coin = coins[index];
    const timesCoinFits = Math.floor(remaining / coin);

    if (timesCoinFits >= 1) {
      for (let j = 0; j < timesCoinFits; j += 1) {
        change.push(coin);
        remaining -= coin;
      }
    }
  }
  return change;
}