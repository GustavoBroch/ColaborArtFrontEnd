import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-inicio-categoria',
  templateUrl: './inicio-categoria.component.html',
  styleUrls: ['./inicio-categoria.component.css']
})
export class InicioCategoriaComponent implements OnInit {

  //Variáveis
  categoria: Categoria = new Categoria()
  listaCategoria:Categoria[]

  constructor(
    private categoriaService:CategoriaService,
    private router:Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
    if(environment.token == ''){
      //alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    this.findAllCategorias()
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  cadastrarCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })
  }

}
