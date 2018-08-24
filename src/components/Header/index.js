import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/40779189?v=4" alt="Marcel Assis" />
      Marcel Assis
    </User>
  </Container>
);

export default Header;
