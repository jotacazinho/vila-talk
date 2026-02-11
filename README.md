# Vila Talk

Vila Talk é uma rede social anônima inspirada no Twitter, voltada para torcedores de futebol.  
Permite criar posts, curtir, responder anonimamente e diferencia usuários por roles (torcedor, jornalista ou rival).

## Tecnologias

- Frontend: React + CSS puro  
- Backend / Banco de dados: Supabase  
- Tipagem: TypeScript em algumas partes  
- Autenticação: JWT / login anônimo

## Funcionalidades

- Postar mensagens anônimas (até 280 caracteres)  
- Curtir posts  
- Responder posts anonimamente  
- Apagar posts próprios  
- Roles diferentes:  
  - Torcedor: pode postar, curtir e responder  
  - Jornalista: pode curtir e responder  
  - Rival: apenas leitura

## Como rodar localmente

1. Clone o repositório:  
   ```bash
   git clone <url-do-repo>
   cd vila-talk

    Instale dependências:

    npm install

    Crie um projeto no Supabase e configure as variáveis de ambiente (.env) com as credenciais.

    Rodando o projeto:

    npm run dev

    O projeto vai rodar em http://localhost:8080.

    Obs: o backend e frontend estão juntos na mesma raiz, usando npm scripts. Para produção, idealmente seriam separados.

Observações

    Projeto criado para aprendizado e portfólio.

    Funciona localmente usando Supabase como backend.

    Autenticação anônima e controle de posts por usuário.

    Interface estilizada com CSS puro, sem frameworks de UI.
