import GlobalCss from './styles'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './components/ListaVagas'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="App">
        <Cabecalho />
        <Hero />
        <FormVagas />
        <ListaVagas />
      </div>
    </>
  )
}

export default App
