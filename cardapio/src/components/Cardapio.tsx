type Prato = {
  id: number;
  nome: string;
  descricao: string;
};

const pratos: Prato[] = [
  {
    id: 1,
    nome: "Pizza",
    descricao: "Pizza de queijo com molho de tomate",
  },
  {
    id: 2,
    nome: "Hambúrguer",
    descricao: "Hambúrguer artesanal com queijo",
  },
  {
    id: 3,
    nome: "Lasanha",
    descricao: "Lasanha à bolonhesa",
  },
];

export default function Cardapio() {
  function adicionarAoPedido(prato: Prato) {
    window.dispatchEvent(
      new CustomEvent<Prato>("adicionar-ao-pedido", {
        detail: prato,
      })
    );
  }

  return (
    <section>
      <h2>Cardápio</h2>

      {pratos.map((prato) => (
        <article key={prato.id}>
          <h3>{prato.nome}</h3>
          <p>{prato.descricao}</p>

          <button onClick={() => adicionarAoPedido(prato)}>
            Adicionar ao pedido
          </button>
        </article>
      ))}
    </section>
  );
}