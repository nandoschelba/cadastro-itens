import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/assets/model/produto.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form = new FormControl('form', [Validators.required, Validators.pattern("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"), Validators.maxLength(50)]);

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
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createItem(): void {
    this.produtoService.postItem(this.item).subscribe(() => {
      this.produtoService.showMessage('Item criado com sucesso!')
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

  getErrorMessage() {
    if (this.form.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (this.form.hasError('pattern')) {
      return 'Esse campo só aceita letras';
    }


    return this.form.hasError('') ? '' : '';
  }

}
