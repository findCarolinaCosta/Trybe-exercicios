import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;