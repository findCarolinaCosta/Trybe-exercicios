import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers';
import '@testing-library/jest-dom';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDog = queryByText('Novo dog');

    expect(buttonDog).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDog);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
