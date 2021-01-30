import { User } from './../model/User';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaProdutos: Produto[]

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    // private authService: AuthService
    
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.getAllProdutos()
    //this.getAllCategoria()
  }

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

}
