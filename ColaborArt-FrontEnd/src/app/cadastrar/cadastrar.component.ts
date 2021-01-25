import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User;
  confirmarSenha: string
  tipoUsuario : string
  constructor(private authService : AuthService,
    private router : Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event:any){
this.confirmarSenha = event.target.value
  }

cadastrar(){
this.user.tipo = 'cliente'

if(this.user.senha!=this.confirmarSenha){
alert('Senha Incorreta.')
}else{
  this.authService.cadastrar(this.user).subscribe(( resp: User)=> {this.user = resp 

    this.router.navigate(['/entrar']) /* confirmar nome da rota - login/logar ; entrar ; home ; etc */ 
  alert('Artista cadastrado com sucesso !')}

  ) 
}
}
}
