import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/FormDataDisplay.css';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const { personalForm, professional } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = personalForm;
    const { curriculo, cargo, descricao } = professional;
    return (
      <div className="container">
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {' '}
          { nome }
        </div>
        <div>
          Email:
          {' '}
          { email }
        </div>
        <div>
          CPF:
          {' '}
          { cpf }
        </div>
        <div>
          Endereço:
          {' '}
          { endereco }
        </div>
        <div>
          Cidade:
          {' '}
          { cidade }
        </div>
        <div>
          Estado:
          {' '}
          { estado }
        </div>
        <div>
          Currículo:
          {' '}
          { curriculo }
        </div>
        <div>
          Cargo:
          {' '}
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          {' '}
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalForm: PropTypes.objectOf(PropTypes.string).isRequired,
  professional: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  personalForm: state.Form.payload.personalForm,
  professional: state.Form.payload.professional,
});

export default connect(mapStateToProps, null)(FormDataDisplay);
