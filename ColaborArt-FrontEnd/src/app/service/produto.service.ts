import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  constructor(private http: HttpClient) { 
  }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }


  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produto')
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/produto', produto, this.token)

  }

  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:8080/produto/${id}`, this.token)
  }


  getByNomeProduto(tipoProduto: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:8080/produto/produto/${tipoProduto}`, this.token)
  }


  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('http://localhost:8080/produto', produto, this.token)
  }
 
  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produto/${id}`, this.token)
  }
}
