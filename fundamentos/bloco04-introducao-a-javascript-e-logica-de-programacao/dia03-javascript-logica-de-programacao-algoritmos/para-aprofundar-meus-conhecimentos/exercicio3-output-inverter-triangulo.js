let n = 5;
let linha = '';
for (let espaco = 1; espaco <= n; espaco += 1) {
  let linha = '';
  for (let umEspaco = 0; umEspaco < n - espaco; umEspaco += 1) {
    linha += ' ';
  }
  for (let asteriscos = 0; asteriscos < espaco; asteriscos += 1) {
    linha += '*';
  }
  console.log(linha);
}