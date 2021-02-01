import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-apagar-categoria',
  templateUrl: './apagar-categoria.component.html',
  styleUrls: ['./apagar-categoria.component.css']
})
export class ApagarCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number
  constructor(private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  apagar() {
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(() => {
      this.alertas.showAlertSuccess('Categoria deletado com sucesso!')
      this.router.navigate(['/categoria'])
    })
  }
}
