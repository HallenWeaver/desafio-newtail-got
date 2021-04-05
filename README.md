# desafio-newtail-got

## Desafio Newtail: API Game of Thrones

### Stack

#### Back-end: Node.JS

#### Banco de Dados: MongoDB

### Versionamento

#### Versão 1.0.0
Criação do projeto, versão inicial do documento.

### Como Rodar o Projeto

#### Pré-requisitos
Ter uma instância de um banco mongoDB; configure os dados via o arquivo `env.yaml` que se encontra na raiz do projeto, passando para ele os dados de usuário, senha e local do banco.

#### Inicializando o Servidor
Primeiramente instale as bibliotecas necessárias com o comando:
`npm i`

Para rodar o projeto, execute o comando:
`npm run start`

#### Rotas
O projeto aceita três rotas, a saber:
* [POST] /addHouse -- Adiciona uma nova casa
    * Passe um objeto no formato:
    ``` javascript
    {
        "id": String, 
        "name": String,
        "foundationDate": String,
        "region": String,
        "currentLord": {
            "name": String,
            "seasons": [String]
        } 
    }
    ```

* [POST] /findHouses -- Busca uma lista de casas ou uma casa específica
    * Para encontrar todas as casas, envie um objeto no formato:
    ``` javascript
    {
        "paginationOptions": {
            "limit": Number,
            "skip": Number
        }
    }
    ```
    Onde o parâmetro `limit` indica o número de resultados a serem retornados do banco, e o parâmetro `skip` indica o número da página retornada.
    * Para encontrar uma casa específica, envie um objeto no formato:
    ``` javascript
    {
        "query": {
            "name": String
            "id": String
        }
    }
    ```

* [DELETE] /deleteHouses -- Deleta uma casa por id/nome
    * Para encontrar uma casa específica, envie um objeto no formato:
    ``` javascript
    {
        "query": {
            "name": String
            "id": String
        }
    }
    ```

#### Testes
Para efetuar os testes unitários e exibir a cobertura, execute:
    `npm run test`