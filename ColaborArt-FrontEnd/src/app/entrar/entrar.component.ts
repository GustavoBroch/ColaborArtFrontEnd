import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  nome = environment.nomeCompleto;
  foto = environment.foto;
  token = environment.token;
  idUser = environment.id;

  user: User = new User();
  categoria: Categoria = new Categoria();
  produto: Produto = new Produto();

  constructor(
    private auth: AuthService,
    private router: Router,
    private produtoService: ProdutoService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    // if (environment.token == '') {
    //   this.router.navigate(['/home']);
    // }
    // this.findByIdUser();
    // this.getAllCategoria();
    // this.getAllProdutos();
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;

        localStorage.setItem('token', this.userLogin.token);
        environment.token = this.userLogin.token;
        environment.foto = this.userLogin.foto;
        environment.nomeCompleto = this.userLogin.nomeCompleto;
        environment.id = this.userLogin.idUserLogin;
        environment.tipo = this.userLogin.tipo;

        this.router.navigate(['/inicio']);
        this.alertas.showAlertSuccess('Logado com sucesso!');
      },
      (erro) => {
        if (erro.status == '500') {
          this.alertas.showAlertDanger('Usuário ou senha estão incorretos');
        }
      }
    );
  }

  atualizar() {
    this.alertas.showAlertSuccess(
      'Comentario enviado com sucesso , entraremos em contato atraves do seu e-mail'
    );
    this.router.navigate(['/home']);
  }
}
