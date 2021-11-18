//Para utilizar a função renderWithRedux em nossos testes, é necessário também fazer alguns imports :

import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';

//Esses imports servem para termos acesso às ferramentas necessárias pra mockar o store 