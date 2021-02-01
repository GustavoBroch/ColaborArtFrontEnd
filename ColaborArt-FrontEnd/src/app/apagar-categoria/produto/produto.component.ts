import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto : Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaCategoria : Categoria[]
  idCat : number
  idProd : number
  
  constructor(private router : Router , 
    private route : ActivatedRoute, 
    private produtoService : ProdutoService,
    private alertas:AlertasService ) { }

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
