import styled from 'styled-components'

export const Menu = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const Logo = styled.img`
  margin-top: 1rem;
  width: 22%;
`
export const MenuLink = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`
export const NavLink = styled.li`
  color: #011725;
  font-weight: bold;
  margin-right: 2rem;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #011725;
    cursor: pointer;
  }

  &:active {
    border-bottom: none;
    color: aliceblue;
  }
`
