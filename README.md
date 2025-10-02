# Cypher - Blog Offline Simples

![Spycam](components/img/Spycam.png)

Este é um projeto de um blog simples e funcional que opera totalmente offline, utilizando o `localStorage` do navegador para armazenar e exibir postagens. O projeto foi desenvolvido como uma forma de aplicar e aprofundar conhecimentos em tecnologias web front-end.

## 🚀 Sobre o Projeto

O objetivo do "Cypher" é simular um sistema de blog onde o usuário pode criar novas postagens em uma página de administração e visualizá-las na página principal. Toda a mágica acontece no lado do cliente (client-side), sem a necessidade de um back-end ou banco de dados externo.

## ✨ Funcionalidades

- **Criação de Posts:** Uma página dedicada (`post.html`) com um formulário para inserir um título e o conteúdo do post.
- **Listagem de Posts:** A página inicial (`index.html`) carrega e exibe dinamicamente todos os posts salvos.
- **Armazenamento Local:** Utiliza a API `localStorage` do navegador para persistir os dados, o que significa que seus posts não desaparecem ao fechar a aba.
- **Design Responsivo (em desenvolvimento):** Estrutura básica de layout com Flexbox, pronta para futuras melhorias.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica do conteúdo.
- **CSS3:** Para a estilização, layout com Flexbox e efeitos visuais como `clip-path` e `drop-shadow`.
- **JavaScript (Vanilla):** Para toda a interatividade, manipulação do DOM e gerenciamento dos dados com o `localStorage`.

## ⚙️ Como Usar

Como este é um projeto puramente front-end, não há necessidade de instalação de dependências.

1.  Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Abra o arquivo `index.html` em seu navegador para ver os posts.
3.  Navegue até `post.html` para criar uma nova postagem.

---

### 📝 Observação sobre o Processo de Desenvolvimento

Este projeto foi criado com o principal objetivo de **estudo e aprendizado**. A ideia era construir um sistema dinâmico do zero, focando em como o JavaScript pode manipular a página e gerenciar dados de forma local.

Durante o desenvolvimento, contei com o auxílio de uma ferramenta de IA (Gemini Code Assist) como uma parceira de programação. É importante ressaltar que o processo não se resumiu a copiar e colar código. A IA foi utilizada como uma mentora: para tirar dúvidas, sugerir abordagens e explicar conceitos complexos. Cada linha de código sugerida foi estudada e compreendida para que eu pudesse **aprender a lógica por trás e ser capaz de replicá-la de forma independente**. Essa colaboração foi fundamental para acelerar meu aprendizado e aprofundar meu entendimento sobre o desenvolvimento web.
