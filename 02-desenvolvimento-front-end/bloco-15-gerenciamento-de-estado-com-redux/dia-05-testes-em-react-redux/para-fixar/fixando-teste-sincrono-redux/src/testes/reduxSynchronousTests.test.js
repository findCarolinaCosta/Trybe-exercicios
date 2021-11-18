import { cleanup } from '@testing-library/react';
import renderWithRedux from './reduxSynchronousTests';
import App from '../App';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  it('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });
});

describe('Exercicio de fixação', () => {
  beforeEach(cleanup);
  test('1. Crie um teste com o valor padrão do reducer e teste se um clique funciona.', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    userEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('2.Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    expect(queryByText('10')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  });
})
