import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-artista',
  templateUrl: './cadastrar-artista.component.html',
  styleUrls: ['./cadastrar-artista.component.css']
})
export class CadastrarArtistaComponent implements OnInit {

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
this.user.tipo = 'artista'

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