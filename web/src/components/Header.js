import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

// import HeaderLinks from './HeaderLinks';
import NavListItemStyled from './styledComponents/NavListItemStyled';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fafafa;
  background-color: rebeccapurple;
  padding: 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 0;
  }

  h1, h2 {
    margin: 0;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0 1rem;

  @media (max-width: 900px) {
    flex-direction: row;
  } 
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderStyled>
      <NavContainer>
        <NavList>
          <NavListItemStyled to='/' title='Home' />
          <NavListItemStyled to='/work' title='Work' />
          <NavListItemStyled to='/about' title='About' />
          <NavListItemStyled to='/contact' title='Contact' />
        </NavList>
      </NavContainer>
    </HeaderStyled>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
export { HeaderStyled };
