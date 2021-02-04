import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-apagar-produto',
  templateUrl: './apagar-produto.component.html',
  styleUrls: ['./apagar-produto.component.css']
})
export class ApagarProdutoComponent implements OnInit {

  produto : Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaCategoria : Categoria[]
  idCat : number
  idProd : number

  constructor(
    private router : Router , 
    private route : ActivatedRoute, 
    private produtoService : ProdutoService,
    private alertas:AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
   this.idProd = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProd)
  }

  findByIdProduto(id : number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })

  }
  atualizar(){
    this.categoria.idCategoria = this.idCat
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
    this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

  apagar(){
    this.produtoService.deleteProduto(this.idProd).subscribe(()=>{
      this.alertas.showAlertSuccess('Produto apagado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }
  
}
