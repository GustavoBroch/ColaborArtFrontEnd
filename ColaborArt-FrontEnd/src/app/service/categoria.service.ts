import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  
  token = { headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  constructor(private http: HttpClient) {}
  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      'http://localhost:8080/categoria'
      
    );
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria> ('http://localhost:8080/categoria', categoria, this.token)
  }

  getBytipoProduto(tipoProduto: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `http://localhost:8080/categoria/produtos/${tipoProduto}`,
      this.token
    );
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(
      `http://localhost:8080/categoria/${id}`,
      this.token
    );
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      'http://localhost:8080/categoria',
      categoria,
      this.token
    );
  }

  deleteCategoria(id: number) {
    return this.http.delete(
      `http://localhost:8080/categoria/${id}`,
      this.token
    );
  }
}
