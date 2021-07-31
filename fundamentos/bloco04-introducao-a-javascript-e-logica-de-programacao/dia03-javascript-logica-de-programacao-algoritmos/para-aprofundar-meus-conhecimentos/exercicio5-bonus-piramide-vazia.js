let n = 7;
for (let index = 1; index <= n; index += 2) {
  let linha = '';
  for (let i = 0; i < (n - index) / 2; i++) {
    linha += ' ';
  }
  for (let c = 0; c < index; c++) {
    if (c == 0 || c == index - 1 || index == n) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
}
