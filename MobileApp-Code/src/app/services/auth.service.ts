import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage, private http: HttpClient) { 
    this.storage.create();
  }

  saveToken(){
    this.storage.set(TOKEN_KEY, "token")
  }

  async getToken(){
    var token: any;
    await this.storage.get(TOKEN_KEY).then(res => {token = res;});
    return token;
    }
}
