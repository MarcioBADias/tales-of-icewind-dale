import * as C from './style'

const Menu = () => (
  <C.Menu>
    <C.Logo src="Icewind_Dale_Logo.png" alt="Icewind Dale Logo" />
    <nav>
      <C.MenuLink>
        <C.NavLink>Home</C.NavLink>
        <C.NavLink>Personagens</C.NavLink>
        <C.NavLink>Guia de missões</C.NavLink>
        <C.NavLink>Histórico de Aventuras</C.NavLink>
        <C.NavLink>Sobre</C.NavLink>
      </C.MenuLink>
    </nav>
  </C.Menu>
)

export { Menu }
