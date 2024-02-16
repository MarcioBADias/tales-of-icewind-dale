import { Characters } from './components/Characters'
import { Map } from './components/Map'
import { Menu } from './components/Menu'
import { Scenario } from './components/Scenario'

const App = () => {
  return (
    <div className="base">
      <Menu />
      <main className="principal">
        <Map />
        <Characters />
        <Scenario />
      </main>
      <footer className="rodape"></footer>
    </div>
  )
}

export { App }
