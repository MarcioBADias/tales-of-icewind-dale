import * as C from './style'
const tenTowers = [
  {
    id: crypto.randomUUID(),
    cityName: 'bremen',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'bryn-shander',
    active: true,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'caer-dinerval',
    active: true,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'caern-koing',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'dougans-hole',
    active: true,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'easthaven',
    active: true,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'good-mead',
    active: true,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'lonelywood',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'targos',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    cityName: 'termalaine',
    active: false,
  },
]
const Scenario = () => (
  <C.Scenario>
    <C.Tittle>Dez-Burgo</C.Tittle>
    <div>
      <C.Card>
        {tenTowers.map(({ id, cityName, active }) => (
          <C.MapArea key={id}>
            {active ? (
              <C.MiniMapColor
                src={`scenario-maps/${cityName}.png`}
                alt={cityName}
              />
            ) : (
              <C.MiniMapPnB
                src={`scenario-maps/${cityName}.png`}
                alt={cityName}
              />
            )}

            <h4>{cityName}</h4>
          </C.MapArea>
        ))}
      </C.Card>
    </div>
  </C.Scenario>
)

export { Scenario }
