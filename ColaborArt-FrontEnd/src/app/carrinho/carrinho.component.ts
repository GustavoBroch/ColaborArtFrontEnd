import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasComponent } from '../alertas/alertas.component';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto : Produto = new Produto()
  qtd: number = 1
  constructor(private router : Router,
    private alertas : AlertasService,
    private route : ActivatedRoute,
    private produtoService : ProdutoService
    ) { }

  ngOnInit(){
      window.scroll(0,0)
      
      if (environment.token == '') {
        this.alertas.showAlertInfo('Voce precisa estar logado para colocar itens no carrinho')
        this.router.navigate(['/home'])
      }
      let id = this.route.snapshot.params['id']
      this.findByIdProduto(id)
  }
findByIdProduto(id:number){
  this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
    this.produto= resp
  })
}

mais(){
  this.qtd = this.qtd +1
}

menos(){this.qtd  = this.qtd -1}


comprar(){
  this.alertas.showAlertSuccess('Pedido de compra efetuado com sucesso , em breve voce recebera um email confirmando seu pedido -- Obrigado pela colaboraçao! ')
  this.router.navigate(['/inicio'])
}
voltar(){
  this.router.navigate(["/inicio"])
 // environment. = ''
}

}




