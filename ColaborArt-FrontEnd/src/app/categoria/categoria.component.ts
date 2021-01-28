import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria : Categoria = new Categoria()
  listaCategoria : Categoria[]

  constructor(private router : Router , 
    private categoriaService : CategoriaService
    ) { }

  ngOnInit() {
    if(environment.token== ''){
this.router.navigate(['/entrar']) /* caminho colocado dentro do projeto  */

    }
  this.findAllCategoria()
  }
  findAllCategoria(){
this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
  this.listaCategoria=resp
})
  }

  cadastrar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria= resp
      alert('Categoria cadastrada com sucesso !')
      this.findAllCategoria()
      this.categoria = new Categoria()
    })
  }

}
