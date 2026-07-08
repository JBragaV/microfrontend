import React, { Suspense } from "react";

const Cardapio = React.lazy(() => import("cardapio/Cardapio"));
const Pedido = React.lazy(() => import("pedido/Pedido"));

export default function App() {
  return (
    <main>
      <h1>Sistema de Pedidos</h1>

      <Suspense fallback={<p>Carregando cardápio...</p>}>
        <Cardapio />
      </Suspense>

      <Suspense fallback={<p>Carregando pedido...</p>}>
        <Pedido />
      </Suspense>
    </main>
  );
}