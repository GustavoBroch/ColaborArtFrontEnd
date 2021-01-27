import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto
      environment.nomeCompleto = this.userLogin.nomeCompleto
      environment.id = this.userLogin.idUserLogin
      console.log(environment.token)
      console.log(environment.nomeCompleto)
      console.log(environment.foto)
      console.log(environment.id)
      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == '500') {
        alert('Usuário ou senha estão incorretos')
      }
    })
  }
}