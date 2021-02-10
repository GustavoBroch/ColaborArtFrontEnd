import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  listaProdutos:Produto[]
  
  
  constructor(
    private produtoService:ProdutoService,
    private router : Router,
    private alertas : AlertasService
  ) {}

  ngOnInit(){
  window.scroll(0,0)
  }

  comprarHome(){
    this.alertas.showAlertDanger('Você precisa estar logado para inserir itens no carrinho')
        this.router.navigate(['/entrar'])
  }
}
