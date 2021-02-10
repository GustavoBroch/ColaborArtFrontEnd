import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasComponent } from '../alertas/alertas.component';
import { EditProdutoComponent } from '../edit-produto/edit-produto.component';
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

  constructor(
    private router : Router,
    private alertas : AlertasService,
    private route : ActivatedRoute,
    private produtoService : ProdutoService
    ) { }

  ngOnInit(){
      window.scroll(0,0)
      
      if (environment.token == '') {
        this.alertas.showAlertInfo('Você precisa estar logado para colocar itens no carrinho')
        this.router.navigate(['/entrar'])
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

menos(){
  if(this.qtd != 0){
    this.qtd  = this.qtd -1
   
  }
  else{
    this.alertas.showAlertDanger("Você não pode zerar a quantidade produtos.")
  }
    
}


comprar(){
  this.alertas.showAlertSuccess('Pedido de compra efetuado com sucesso. Em breve, você receberá um e-mail confirmando seu pedido. Obrigado pela sua colaboração! ')
  this.router.navigate(['/inicio'])
}
voltar(){
  this.router.navigate(["/inicio"])
 // environment. = ''
}

}




