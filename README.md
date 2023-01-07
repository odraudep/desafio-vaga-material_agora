# SuperHero API ReactJS App

## Bibliotecas e ferramentas usadas:

  - Vite
  - React
  - React Router
  - React Toastify
  - React Icons
  - Tailwind CSS
  - Axios
  - Express
  - Cors
  - Dotenv
  - Nodemon
  - Sucrase
  - Eslint
  - Docker

---

## Iniciar a aplicação

1. ### **Com Docker**
    Para rodar a aplicação usando o Docker, basta possuir o [Docker](https://www.docker.com/) instalado na sua máquina e rodar o comando abaixo no seu terminal no diretório raiz do projeto, o que tem o arquivo "docker-compose.yml":
    ``` Bash
      docker-compose up
    ```
2. ### **Sem Docker**
    1. Para rodar a aplicação sem o Docker, basta rodar o comando abaixo no seu terminal no diretório raiz do projeto, lembrando de ter o Node e o Yarn instalado na sua máquina:
        ``` Bash
          yarn install-dependencies
        ```
        E depois, em cada um dos dois diretórios (app/api e app/client) rodar o comando abaixo:
        ``` Bash
          yarn dev
        ```
    2. Ou entrar nos diretórios app/api e app/client e rodar os comando abaixo no terminal:
        ``` Bash
          yarn
          yarn dev
        ```

---
