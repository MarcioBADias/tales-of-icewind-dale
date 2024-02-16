const Scenario = () => (
  <section className="cenario">
    <h3 className="cenario__titulo">Dez-Burgo</h3>
    <div className="cenario__itens">
      <ul className="cenario__card">
        {/* Aqui seria onde você renderizaria os cards do cenário usando um loop */}
        {/* Exemplo: cenario.map(local => <CenarioCard key={local.id} {...local} />) */}
      </ul>
    </div>
  </section>
)

export { Scenario }
