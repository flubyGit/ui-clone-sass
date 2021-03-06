import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title } from './styled';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <Container>
        <img src={logo} alt="Imagem do logotipo do pré processador SASS." />

        <ol>
          <li>
            <Link to="#">Install</Link>
          </li>
          <li>
            <Link to="#">Learn Sass</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Documentation</Link>
          </li>
          <li>
            <Link to="#">Get Involved</Link>
          </li>
          <li>
            <form>
              <input
                type="text"
                placeholder="Search"
                aria-required="false"
                value={search}
                onChange={e => setSearch(e.target.value)}
                name="search"
                id="search"
              />
            </form>
          </li>
        </ol>
      </Container>
      <Title>CSS with Superpowers</Title>
    </>
  );
};

export default Header;
