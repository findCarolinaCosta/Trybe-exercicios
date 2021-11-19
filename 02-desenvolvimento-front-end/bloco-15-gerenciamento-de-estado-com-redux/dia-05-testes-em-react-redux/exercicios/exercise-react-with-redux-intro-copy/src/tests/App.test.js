import React from 'react';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Página principal', () => {
  test('Testa sinal de transito', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonRed = queryByText('Red');
    const buttonYellow = queryByText('Yellow');
    const buttonGreen = queryByText('Green');
    const img = screen.getByRole('img', { name: 'trafficSignal' } );

    userEvent.click(buttonRed);
    expect(img).toHaveAttribute('src', 'redSignal.jpeg');

    userEvent.click(buttonYellow);
    expect(img).toHaveAttribute('src', 'yellowSignal.jpeg');

    userEvent.click(buttonGreen);
    expect(img).toHaveAttribute('src', 'greenSignal.jpeg');
  })

  test('Testa carros', () => {
    const { queryByText } = renderWithRedux(<App />);
  
    const btnMoveRed = queryByText('move red');
    const carRed = screen.getByRole('img', { name: 'red car' });

    userEvent.click(btnMoveRed);
    expect(carRed).toHaveAttribute('class', 'car-right');
    userEvent.click(btnMoveRed);
    expect(carRed).toHaveAttribute('class', 'car-left');

    const btnMoveBlue = queryByText('move blue');
    const carBlue = screen.getByRole('img', { name: 'blue car' });

    userEvent.click(btnMoveBlue);
    expect(carBlue).toHaveAttribute('class', 'car-right');
    userEvent.click(btnMoveBlue);
    expect(carBlue).toHaveAttribute('class', 'car-left');

    const btnMoveYellow = queryByText('move yellow');
    const carYellow = screen.getByRole('img', { name: 'yellow car' });

    userEvent.click(btnMoveYellow);
    expect(carYellow).toHaveAttribute('class', 'car-right');
    userEvent.click(btnMoveYellow);
    expect(carYellow).toHaveAttribute('class', 'car-left');
  });
});
