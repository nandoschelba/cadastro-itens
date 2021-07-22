import { ProdutoService } from '../../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/assets/model/produto.model';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  item: Item
  open: boolean = false

  constructor(private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.produtoService.getId(id).subscribe(itens => {
      this.item = itens
    })
  }

  updateItem(): void {
    this.produtoService.putItem(this.item).subscribe(() => {
      this.produtoService.showMessage('Item atualizado com sucesso!')
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
