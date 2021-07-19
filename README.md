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

### <a name="servico1"></a> 1 - create
Cadastra através do método post um item com base nas informações passadas através do model. `<Item>`

 <br>

```

## Desenvolvedores/Contribuintes:
[Luiz Fernando Schelbauer](mailto:nandoschelba@gmail.com)
