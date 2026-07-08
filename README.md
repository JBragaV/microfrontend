# Microfrontend - Sistema de Pedidos

Projeto desenvolvido como atividade prática utilizando arquitetura de Micro Frontends.

O sistema é composto por três aplicações independentes que se comunicam através de Module Federation e eventos globais do navegador.

---

# Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- Module Federation (@module-federation/vite)
- HTML5
- CSS3

---

# Arquitetura

O projeto está dividido em três aplicações.

```
micro-frontend/
│
├── container
├── cardapio
└── pedido
```

## Container

Aplicação principal.

Responsável por importar dinamicamente os micros utilizando Module Federation.

Também é responsável por exibir a aplicação completa ao usuário.

---

## Cardápio

Microfrontend responsável por exibir os pratos disponíveis.

Cada prato possui:

- Nome
- Descrição
- Botão "Adicionar ao Pedido"

Ao clicar no botão, é disparado um evento global para que o micro Pedido receba a informação.

---

## Pedido

Microfrontend responsável por exibir os itens adicionados ao pedido.

Ele permanece escutando um evento global enviado pelo Cardápio.

Sempre que um novo prato é recebido, ele é adicionado à lista do pedido.

---

# Comunicação entre os Micros

A comunicação é realizada utilizando eventos globais do navegador.

O Cardápio envia um evento.

```typescript
window.dispatchEvent(
    new CustomEvent("adicionar-ao-pedido", {
        detail: prato
    })
);
```

O Pedido fica escutando este evento.

```typescript
window.addEventListener(
    "adicionar-ao-pedido",
    handleAdicionar
);
```

Sempre que um evento é recebido, o item é incluído no estado da aplicação.

---

# Module Federation

O Container importa dinamicamente os dois micros.

```
Container
│
├── Cardápio
└── Pedido
```

Cada micro expõe apenas o componente principal.

Exemplo:

```
Cardápio
    └── ./Cardapio

Pedido
    └── ./Pedido
```

O Container realiza a importação utilizando React.lazy.

---

# Estrutura dos Projetos

```
container
│
├── src
│   ├── components
│   ├── App.tsx
│   ├── main.tsx
│   └── remotes.d.ts
│
├── public
│
├── vite.config.ts
└── package.json
```

```
cardapio
│
├── src
│   ├── components
│   │     └── Cardapio.tsx
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public
│
├── vite.config.ts
└── package.json
```

```
pedido
│
├── src
│   ├── components
│   │     └── Pedido.tsx
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public
│
├── vite.config.ts
└── package.json
```

---

# Como instalar

Cada aplicação possui suas dependências independentes.

## Container

```bash
cd container
npm install
```

## Cardápio

```bash
cd cardapio
npm install
```

## Pedido

```bash
cd pedido
npm install
```

---

# Como executar

Abra três terminais.

## Terminal 1

```bash
cd cardapio
npm run dev
```

Aplicação disponível em:

```
http://localhost:3001
```

---

## Terminal 2

```bash
cd pedido
npm run dev
```

Aplicação disponível em:

```
http://localhost:3002
```

---

## Terminal 3

```bash
cd container
npm run dev
```

Aplicação disponível em:

```
http://localhost:3000
```

---

# Fluxo da Aplicação

```
Usuário

     │

     ▼

Container

     │

     ├──────────────► Cardápio

     │                    │

     │                    ▼

     │          Seleciona um prato

     │                    │

     │                    ▼

     │      dispatchEvent("adicionar-ao-pedido")

     │                    │

     │                    ▼

     └──────────────► Pedido

                           │

                           ▼

                 Atualiza lista de itens
```

---

# Funcionalidades

- Exibição dos pratos disponíveis.
- Adição de pratos ao pedido.
- Comunicação entre microfrontends.
- Carregamento dinâmico através de Module Federation.
- Aplicações independentes.
- Componentização utilizando React.

---

# Portas utilizadas

| Aplicação | Porta |
|-----------|-------|
| Container | 3000 |
| Cardápio | 3001 |
| Pedido | 3002 |

---

# Dependências principais

```
React
TypeScript
Vite
@module-federation/vite
```

---

# Autor

Projeto desenvolvido por Jocimar Braga como atividade prática da disciplina de Micro Frontends da EBAC.