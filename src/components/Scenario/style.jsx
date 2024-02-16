import styled from 'styled-components'

export const Scenario = styled.section`
  align-items: center;
  background: rgba(171, 211, 247, 0.452);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`
export const Tittle = styled.h3`
  font-size: 30px;
  margin: 0.5rem 0;
`
export const Card = styled.ul`
  align-items: center;
  border-top: 3px solid aliceblue;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`
export const MapArea = styled.li`
  width: 20%;
  margin-bottom: 1rem;
`
export const MiniMapColor = styled.img`
  border-radius: 200px;
  width: 200px;
  margin-bottom: 0.5rem;
`
export const MiniMapPnB = styled.img`
  border-radius: 200px;
  width: 200px;
  margin-bottom: 0.5rem;
  filter: grayscale(100%);
`
