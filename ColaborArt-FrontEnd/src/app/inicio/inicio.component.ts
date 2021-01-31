import { User } from './../model/User';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { Component, OnInit } from '@angular/core';
// import { Component} from '@angular/core';
import { from } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
// import { OnInit } from '@angular/core';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  


  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private authService: AuthService,
    private categoriaService: CategoriaService
    
  ) { }

  // ngOnInit(){
  //   if(environment.token == ''){
  //     this.router.navigate(['/entrar'])
  //   }
  //   this.getAllProdutos()
  //   //this.getAllCategoria()
  // }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp:Produto[])=>{
    this.listaProdutos = resp
    })
  }

  // findByIdUser() {
  //    this.authService.getByIdUser(this.IdUser).subscribe((resp: User)=>{
  //     this.user = resp
  //   })
  // }


categoria : Categoria = new Categoria()
produto : Produto = new Produto()
listaCategoria : Categoria[]
listaProdutos : Produto[]

user: User = new User()
idUser = environment.id
idCat : number

 

  ngOnInit() {
    if(environment.token==''){
      alert('Sua sessao expirou, entre novamente')
      this.router.navigate(['/entrar'])
    }

    this.getAllCategoria()
    this.getAllProdutos()
  }

  getAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=> {
    this.listaCategoria= resp
    })
  }

  findByIdCategoria(){
  this.categoriaService.getByIdCategoria(this.idCat).subscribe((resp: Categoria)=>{
  this.categoria = resp
  })
}

// getAllProdutos(){
//   this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>
//   {
//     this.listaProdutos= resp
//   })
// }

findByIdUser(){
  this.authService.getByIdUser(this.idUser).subscribe((resp: User)=>{
this.user = resp
  })
}

publicar(){
this.categoria.idCategoria = this.idCat
this.produto.categoria = this.categoria

this.user.idUsuario = this.idUser
this.produto.usuario = this.user

this.produtoService.postProduto(this.produto).subscribe((resp : Produto)=>{
  this.produto = resp
  alert('Produto cadastrado realizado com sucesso!!')
  this.produto = new Produto()
  this.getAllProdutos()
    })
  }
}