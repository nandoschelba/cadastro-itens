import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from 'src/assets/model/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  urlBase = "http://localhost:3000/tarefas"

  constructor(private http: HttpClient) { }

  create(item: Item): Observable<Item>{
    return this.http.post<Item>(this.urlBase, item)
  }

  showMsg(): void {
  }

  listaItens(): Observable<Item[]>{
    return this.http.get<Item[]>(this.urlBase)
  }

  listById(id: number): Observable<Item> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Item>(url)
  }

  update(item: Item): Observable<Item>{
    const url = `${this.urlBase}/${item.id}`
    return this.http.put<Item>(url, item)
  }

  delete(id: number): Observable<Item>{
    const url = `${this.urlBase}/${id}`;
    return this.http.delete<Item>(url)
  }
}
