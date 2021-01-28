import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
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

  constructor(private router : Router , private route : ActivatedRoute, private produtoService : ProdutoService, private categoriaService : CategoriaService ) { }

  ngOnInit() {

    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategoria()
  }
  

  findByIdProduto(id : number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })

  }

  findByIdCategoria(id : number) {
    this.categoriaService.getByIdCategoria(this.idCat).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })

  }
findAllCategoria(){
  this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>
  this.listaCategoria = resp )
}

  atualizar(){
    this.categoria.id = this.idCat
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      alert('Produto atualizado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}