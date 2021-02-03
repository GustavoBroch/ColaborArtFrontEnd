import { User } from './../model/User';
import { AuthService } from './../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  nome = environment.nomeCompleto
  foto = environment.foto


  categoria: Categoria = new Categoria()
  produto: Produto = new Produto()

  listaCategoria: Categoria[]
  listaProdutos: Produto[]
  nomePost: string

 
  token = environment.token



  user: User = new User()

  idUser = environment.id
  idCat: number
  getAllProdutos: any;

  constructor(

    private router: Router,
    private produtoService: ProdutoService,
    private authService: AuthService,

    private categoriaService: CategoriaService,
    private alertas:AlertasService

  ) { }

  ngOnInit() {
    if (environment.token == '') {

      this.router.navigate(['/home'])
    }
    console.log(this.idUser);
    this.findByIdUser();
    this.getAllCategoria();
    this.getListProduto();
    this.getAllProdutos();
  }

  



  getListProduto() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{

      this.listaProdutos = resp
    });
    
  }


  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {

      this.user = resp

    });

  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    });
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.idCat)
      .subscribe((resp: Categoria) => {
        this.categoria = resp
      });
  }

  tamanhoSelect(event: any) {
    this.produto.tamanho = event.target.value
  }


  disponivelSelect(event: any) {

    this.produto.disponivel = event.target.value

  }

  publicar() {
    this.categoria.idCategoria = this.idCat
    this.produto.categoria = this.categoria

    this.user.idUsuario = this.idUser
    this.produto.usuario = this.user

    console.log(this.produto);

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp

      this.alertas.showAlertSuccess('Produto cadastrado realizada com sucesso!!')


    

      this.produto = new Produto()
    
    })
  }

  findByNomeProduto() {

    if(this.nomePost == ''){
      this.getAllProdutos()
    } else {
      this.produtoService
        .getByNomeProduto(this.nomePost)
        .subscribe((resp: Produto[]) => {
          this.listaProdutos = resp
        })
    }
  }


}
