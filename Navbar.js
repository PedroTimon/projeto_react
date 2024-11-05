import React from 'react';
import styled from 'styled-components';
import rLogo from './apps.ico'

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  size: small;
  color: white;
  font-weight: bold;
`;

const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 30px;
    transition: transform 0.6s, color 0.6s;
    &:hover {
      color: #61dafb;
      transform: scale(1.2);
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo><img src={rLogo} alt='Logo'/></Logo>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;