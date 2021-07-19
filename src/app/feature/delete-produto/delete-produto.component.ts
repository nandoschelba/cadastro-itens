import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/assets/model/produto.model';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  item: Item
  itens: Item[]
  open: boolean = false

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  deleteItem(): void {
    this.produtoService.delete(this.item.id).subscribe(() => {
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
