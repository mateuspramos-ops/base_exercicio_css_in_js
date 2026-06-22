import styled from 'styled-components'

// -- Styled Components - Hero
const HeroSection = styled.section`
  background-color: #1f1f1f;
  padding: 80px 32px;
  text-align: center;
`

const HeroTitulo = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;

  span {
    color: #4caf50;
  }
`

const HeroSubtitulo = styled.p`
  font-size: 1.1rem;
  color: #aaaaaa;
  max-width: 600px;
  margin: 0 auto 32px auto;
  line-height: 1.6;
`

const HeroBotao = styled.a`
  background-color: #4caf50;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #388e3c;
  }
`

// -- Componente --
const Hero = () => {
  return (
    <HeroSection>
      <HeroTitulo>
        Encontre sua próxima <span>vaga</span>
      </HeroTitulo>
      <HeroSubtitulo>
        Conectamos talentos às melhores oportunidades do mercado de tecnologia.
      </HeroSubtitulo>
      <HeroBotao href="#">Ver vagas disponíveis</HeroBotao>
    </HeroSection>
  )
}

export default Hero
