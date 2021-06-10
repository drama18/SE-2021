import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {}

  showSideBar = false;

  showNavbar(){
    if (this.router.url === '/' 
    || this.router.url === '/home' 
    || this.router.url === '/login' 
    || this.router.url === '/register' 
    || this.router.url === '/forgot-password') 
      return false;
    

    return true;
  }

  changeSideBarState(){
    this.showSideBar = !this.showSideBar
  }

  sideBarDisappear(){
    this.showSideBar = false;
  }
}
