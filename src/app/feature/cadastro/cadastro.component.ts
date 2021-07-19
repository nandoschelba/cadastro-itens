import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/assets/model/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  item: Item = {
    id: null,
    nome: "",
    unidade: null,
    quantidade: null,
    preco: null,
    perecivel: "",
    dataValidade: null,
    dataFabricacao: ""
  }

  open: boolean = false

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createItem(): void {
    this.produtoService.create(this.item).subscribe(() => {
      this.produtoService.showMsg()
      this.open = true
      setTimeout(() => {
        this.router.navigate(['/itens'])
      }
        , 2000)

    })
  }

  cancel(): void {
    this.router.navigate(['/itens'])
  }

}
