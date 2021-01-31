import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0);

    this.scrollMenu();
  }

  scrollMenu(){
    window.addEventListener('scroll',  (event)=>{
      let nav = <HTMLElement>document.querySelector('#navbar');
      //  let navScroll = nav.scrollHeight  o 670 substituiu esse atributo
   
      if ( window.scrollY < 670 ) {
        nav.style.backgroundColor = 'transparent';
        nav.style.backgroundImage = '';
      } else {
        nav.style.backgroundImage = 'url("../../assets/img/navBar.png")';
        nav.style.transition = 'background-color 200ms linear';
      }
    });
    
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto
      environment.nomeCompleto = this.userLogin.nomeCompleto
      environment.id = this.userLogin.idUserLogin
      this.router.navigate(['/inicio'])
      alert('Logado com sucesso!')
    }, erro => {
      if (erro.status == '500') {
        alert('Usuário ou senha estão incorretos')
      }
    })
  }

}
