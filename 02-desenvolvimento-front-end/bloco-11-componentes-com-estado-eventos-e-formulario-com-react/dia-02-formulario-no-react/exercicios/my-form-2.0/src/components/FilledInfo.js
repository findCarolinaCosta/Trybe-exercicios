import { Component } from 'react';

class FilledInfo extends Component {
  render() {
    const {
      currentState: {
        name, email, cpf, address, city, state,
        addresstype, curriculumsummary, office, descriptionjob
      }
    } = this.props;
    return (
      <div className="div-return-infos">
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Nome: {name}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {address}</div>
        <div> Cidade: {city}</div>
        <div> Estado: {state}</div>

        <div> Tipo de residência: {addresstype}</div>
        <h3>Profissional</h3>
        <div> Currículo: {curriculumsummary}</div>
        <div> Cargo: {office}</div>
        <div> Descrição do cargo: {descriptionjob}</div>
      </div>
    );
  }
}

export default FilledInfo;
