import { useEffect, useState } from "react";

type Prato = {
  id: number;
  nome: string;
  descricao: string;
};

export default function Pedido() {
  const [itens, setItens] = useState<Prato[]>([]);

  useEffect(() => {
    function handleAdicionar(event: Event) {
      const customEvent = event as CustomEvent<Prato>;

      setItens((itensAtuais) => [...itensAtuais, customEvent.detail]);
    }

    window.addEventListener("adicionar-ao-pedido", handleAdicionar);

    return () => {
      window.removeEventListener("adicionar-ao-pedido", handleAdicionar);
    };
  }, []);

  return (
    <section>
      <h2>Pedido</h2>

      {itens.length === 0 && <p>Nenhum item adicionado.</p>}

      {itens.map((item, index) => (
        <article key={`${item.id}-${index}`}>
          <strong>{item.nome}</strong>
          <p>{item.descricao}</p>
        </article>
      ))}
    </section>
  );
}