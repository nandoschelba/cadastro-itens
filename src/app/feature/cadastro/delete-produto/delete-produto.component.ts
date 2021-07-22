import { ProdutoService } from '../../service/produto.service';
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

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.getId(id).subscribe(item => {
      this.item = item
    })
  }

  deleteItem(): void {
    this.produtoService.deleteItem(this.item.id).subscribe(() => {
      this.produtoService.showMessage('Item excluido com sucesso!')
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
