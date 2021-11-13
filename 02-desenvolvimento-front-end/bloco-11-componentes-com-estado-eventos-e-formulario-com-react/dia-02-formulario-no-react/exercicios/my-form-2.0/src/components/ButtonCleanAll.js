import { Component } from 'react';

export default class ButtonCleanAll extends Component {
  render() {
    const cleanForm = () => {
      window.location.reload();
    }
    return (
      <button type="button" onClick={cleanForm}>Limpar formulário</button>
    )
  }
}