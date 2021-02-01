import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 /*  listaProduto: Produto[] */

  constructor(
    /* private produtoService: ProdutoService */
  ) { }

  ngOnInit(){
    /* this.getAllDestaque() */
  }

  /* getAllDestaque() {
    this.produtoService.getAllDestaque().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  } */
}
