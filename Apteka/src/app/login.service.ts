import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private cookieService:CookieService) { }


 
  getToken(login:String,password:String){
    const body = {
      login: login,
      password : password
    };
    return this.http.post("http://localhost:8080/auth",body,{responseType:'text'}).subscribe(
      (response) => this.createCookie(response.split(':')[1],login),
      (error) => console.log(error)

    )
  }
  
  createCookie(jwtToken:string,login:String){
 
    this.cookieService.set('jwt',jwtToken,{expires:2})
    this.cookieService.set('login',login.toString(),{expires:2})
    console.log('cookieset')
  }

}
