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
  nome = environment.nomeCompleto;
  foto = environment.foto;
  token = environment.token;
  idUser = environment.id;

  user: User = new User();
  categoria: Categoria = new Categoria();
  produto: Produto = new Produto();

  listaCategoria: Categoria[];
  listaProdutos: Produto[];
  nomePost: string;

  idCat: number
  
  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0,0)
    
    if (environment.token == '') {
      this.router.navigate(['/home']);
    }
    
    this.findByIdUser();
    this.getAllCategoria();  
    this.getAllProdutos();
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp;
    });
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.idCat)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  tamanhoSelect(event: any) {
    this.produto.tamanho = event.target.value;
  }

  disponivelSelect(event: any) {
    this.produto.disponivel = event.target.value;
  }

  publicar() {
    this.categoria.idCategoria = this.idCat;
    this.produto.categoria = this.categoria;

    this.user.idUsuario = this.idUser;
    this.produto.usuario = this.user;

    console.log(this.produto);

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;

      this.alertas.showAlertSuccess(
        'Produto cadastrado realizada com sucesso!!'
      );
      this.produto = new Produto();
      this.getAllProdutos();
    });

  }

  findByNomeProduto() {
    if (this.nomePost == '') {
      this.getAllProdutos();
    } else {
      this.produtoService
        .getByNomeProduto(this.nomePost)
        .subscribe((resp: Produto[]) => {
          this.listaProdutos = resp;
        });
    }
  }
  sair(){
    localStorage.clear()
    environment.token = ""
    environment.foto = ""
    environment.id = 0
    environment.nomeCompleto = "",
    environment.tipo = ""
    this.router.navigate(["/home"])
  }
}
