import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);

    this.scrollMenu();
  }

  scrollMenu(){
    window.addEventListener('scroll',  (event)=>{
      let nav = <HTMLElement>document.querySelector('#navbar');
      //  let navScroll = nav.scrollHeight  o 670 substituiu esse atributo
   
      if ( window.scrollY < 670 ) {
        nav.style.backgroundColor = 'transparent';
        nav.style.backgroundImage = '';
      } else {
        nav.style.backgroundImage = 'url("../../assets/img/teste.png")';
        nav.style.transition = 'background-color 200ms linear';
      }
    });
    
  }

}
