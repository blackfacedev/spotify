import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container, Content } from './styles/components';
import Header from './components/Header';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
