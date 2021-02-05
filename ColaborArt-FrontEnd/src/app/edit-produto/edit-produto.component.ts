import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  
  idCat: number


  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private produtoService: ProdutoService, 
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/home'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategoria()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })

  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCat).subscribe((resp: Categoria) => {
      this.categoria = resp
    })

  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>
      this.listaCategoria = resp)
  }

  atualizar() {
    this.categoria.idCategoria = this.idCat
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

  tamanhoSelect(event: any) {
    this.produto.tamanho = event.target.value;
  }

  disponivelSelect(event: any) {
    this.produto.disponivel = event.target.value;
  }

  
}
