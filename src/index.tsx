import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Card, Content, Title, Grid, Numbers, NewgameButton } from './components';
import { Provider } from 'react-redux';
import { configureStore } from 'core';

import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor} = configureStore()


ReactDOM.render(
    <ThemeProvider theme={theme}>

      <GlobalStyles/>

      <Provider store={store}> 
        <PersistGate loading={null} persistor={persistor}>
          <Content data-cy="content"> 
            <Title data-cy="title"> Sudoku </Title> 
            <Card data-cy="card"> 
              <NewgameButton/> 
              <Grid/>
              <Numbers/>
            </Card>
          </Content>
        </PersistGate> 
      </Provider>

    </ThemeProvider>,
    document.getElementById('root')
);
