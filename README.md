# Projeto listagem de itens:
Itens/produtos podem ser adicionados, excluidos e atualizados.

Comece instalando as dependências do node modules com 'npm install'
Inicie o servidor: npx json-server --watch db.json
Inicie o servidor angular: ng serve


## Model:
Interface para identificar o item que será adicionado na listagem.
```javascript
export class Item {
    id?: number;
    nome: string;
    unidade: string;
    quantidade?: number;
    preco: number; 
    perecivel: string;
    dataValidade?: string;
    dataFabricacao: string;
}
```

Tela de gerenciamento de itens, possuindo 5 estados de controle:

- [1 - Home](#home)
- [2 - Tela de cadastro](#cadastro)
- [3 - Tela de listagem](#listagem)
- [4 - Opção de atualizar o item](#update)
- [5 - Opção de excluir o item](#delete)

## Componentes:
Módulo: `AppModule`
<br>

### <a name="home"></a> 1 - Home
Tela que exibe o menu e uma mensagem de boas-vindas.

### <a name="cadastro"></a> 2 - Tela de cadastro
Tela que exibe o formulário de adição de um novo item.

### <a name="listagem"></a> 3 - Tela de listagem
Tela que exibe a listagem de itens existentes, tendo a opção de editar ou excluir um item.

## Serviços:
Serviço: `ProdutoService`

Serviço responsável por enviar e trazer as informações de itens adicionados, atualizados ou removidos.
<br>

### <a name="servico1"></a> 1 - postItem
Cadastra através do método post um item com base nas informações passadas através do model.

 <br>

 ### <a name="servico2"></a> 1 - errorHandler
Função que identifica possível erro de conexão do servidor e se integra com a de exibir mensagem.

 <br>

 ### <a name="servico3"></a> 1 - showMessage
Função que exibe mensagem de erro quando é detectado

 <br>

 ### <a name="servico4"></a> 1 - getItens
Obtém a lista de itens derivada do model Item[].

 <br>

 ### <a name="servico5"></a> 1 - getId
Obtém a lista de itens derivada do seu id, com o propósito de navegação, atualizar e excluir determinado item.

<br>

### <a name="servico6"></a> 1 - putItem
Atualiza determinado item baseado no seu id.

<br>

### <a name="servico7"></a> 1 - deleteItem
Deleta determinado item usando o id como referência.

<br>

```

## Desenvolvedores/Contribuintes:
Luiz Fernando Schelbauer(nandoschelba@gmail.com)
