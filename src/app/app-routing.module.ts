import { HomeComponent } from './feature/home/home.component';
import { DeleteProdutoComponent } from './feature/delete-produto/delete-produto.component';
import { UpdateProdutoComponent } from './feature/update-produto/update-produto.component';
import { CadastroComponent } from './feature/cadastro/cadastro.component';
import { ListagemComponent } from './feature/listagem/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "itens", component: ListagemComponent},
  { path: "itens/create", component: CadastroComponent},
  { path: "itens/:id", component: UpdateProdutoComponent},
  { path: "itens/delete/:id", component: DeleteProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
