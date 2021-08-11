// 1. Utilizando o mesmo template de exercício anterior: Adicione uma classe igual para os dois parágrafos.


// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.getElementsByClassName("paragraphs");

// 3. Altere algum estilo do primeiro deles.
document.getElementsByClassName("paragraphs")[0].innerText = "Mude a cor desse parágrafo no próximo exercício";

// 4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
let changeColor = document.getElementsByTagName("h4")[0];
changeColor.style.color = "violet";