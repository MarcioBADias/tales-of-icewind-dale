const Characters = () => (
  <section className="personagens">
    <div className="personagens__itens">
      <h2 className="personagens__titulo">Personagens</h2>
    </div>
    <div className="personagens__conteudo">
      {/* Aqui seria onde você renderizaria os cards dos personagens usando um loop */}
      {/* Exemplo: personagens.map(personagem => <PersonagemCard key={personagem.id} {...personagem} />) */}
    </div>
  </section>
)

export { Characters }
