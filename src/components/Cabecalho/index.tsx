import styled from 'styled-components'

// -- Styled Components - Header
const HeaderContainer = styled.header`
  background-color: #1f1f1f;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;

  span {
    color: #4caf50;
  }
`

const Nav = styled.nav``

const NavLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  margin-left: 24px;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: #4caf50;
  }
`

// -- Componente --
const Cabecalho = () => {
  return (
    <HeaderContainer>
      <Logo>
        Find<span>Jobs</span>
      </Logo>
      <Nav>
        <NavLink href="#">Vagas</NavLink>
        <NavLink href="#">Empresas</NavLink>
        <NavLink href="#">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Cabecalho
