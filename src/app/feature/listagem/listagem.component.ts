import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/assets/model/produto.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  itens: Item[];
  displayedColumns = ['id', 'nome', 'unidade', 'quantidade', 'preco', 'perecivel', 'dataValidade', 'dataFabricacao', 'action'];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getItens().subscribe(itens => {
      this.itens = itens
      console.log(itens)
    })
  }

}
