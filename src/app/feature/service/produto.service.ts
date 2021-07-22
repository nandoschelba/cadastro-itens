import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

import { Item } from 'src/assets/model/produto.model';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  urlBase = "http://localhost:3000/itens"

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

  postItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.urlBase, item).pipe(map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.urlBase)
  }

  getId(id: number): Observable<Item> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Item>(url)
  }

  putItem(item: Item): Observable<Item> {
    const url = `${this.urlBase}/${item.id}`
    return this.http.put<Item>(url, item)
  }

  deleteItem(id: number): Observable<Item> {
    const url = `${this.urlBase}/${id}`;
    return this.http.delete<Item>(url)
  }
}
