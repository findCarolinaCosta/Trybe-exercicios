let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
info.recorrente = 'Sim';

let plussInfo = {
  personagem: " e Tio Patinhas",
  origem: ", Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: " O último MacPatinhas",
  recorrente: "Sim",
}
for (let key in info) {
  if (info[key] === plussInfo[key]) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + plussInfo[key]);
  }
}
