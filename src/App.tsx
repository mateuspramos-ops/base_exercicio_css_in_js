import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Formulario from './components/Formulario'
import ListaVagas from './components/ListaVagas'

// ── Estilos globais com Styled Components ──
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    color: #333333;
    line-height: 1.6;
  }
`

function App() {
  const [filtro, setFiltro] = useState('')

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Formulario onBuscar={setFiltro} />
      <ListaVagas filtro={filtro} />
    </>
  )
}

export default App
