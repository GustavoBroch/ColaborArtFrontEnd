import { NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ColaborArt-FrontEnd';
  routerShow: boolean = false;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url.includes("/home")) {


          this.routerShow = true;
        } else {
          this.routerShow = false;
        }

      }
    });
  }
}
