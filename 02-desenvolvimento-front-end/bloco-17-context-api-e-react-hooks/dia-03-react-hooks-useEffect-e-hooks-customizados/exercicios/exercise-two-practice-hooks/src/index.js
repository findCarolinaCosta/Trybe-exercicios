import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { Provider } from './exercise-2-3/context';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);