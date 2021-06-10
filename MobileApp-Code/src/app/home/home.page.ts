import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  navigateToLogin(){
    //this.router.navigate(['login']);
    setTimeout(() => this.router.navigate(['mentor/home']),1500);
  }

  ngOnInit() {
    this.navigateToLogin();
  }

}
