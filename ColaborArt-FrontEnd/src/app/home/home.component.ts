import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  listaProdutos:Produto[]
  
  
  constructor(
    private produtoService:ProdutoService
  ) {}

  ngOnInit(){
  window.scroll(0,0)
  this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }
}
