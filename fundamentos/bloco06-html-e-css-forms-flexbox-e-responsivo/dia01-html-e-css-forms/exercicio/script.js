const states = document.querySelector('select[class= "state"]');
const allStates = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',]
function mkOptionsStates() {
  const optionStates = allStates;
  for (let index = 0; index < optionStates.length; index += 1) {
    const createOption = document.createElement('option');
    states.appendChild(createOption).innerHTML = optionStates[index];
    states.appendChild(createOption).value = optionStates[index];
  }
}
mkOptionsStates();