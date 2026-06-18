import { Provider } from 'react-redux'
import { store } from './store'
import GlobalCss from './styles'
import Cabecalho from './containers/Cabecalho'
import Hero from './containers/Hero'
import Formulario from './containers/Formulario'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <div className="App">
        <Cabecalho />
        <Hero />
        <Formulario />
        <ListaVagas />
      </div>
    </Provider>
  )
}

export default App
