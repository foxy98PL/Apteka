import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,private loginService:LoginService) { }

  ngOnInit(): void {
   
  }
  test : string
  login(){
    console.log("test")
     this.loginService.getToken((document.getElementById("defaultForm-login")as HTMLInputElement).value 
    ,(document.getElementById("defaultForm-pass")as HTMLInputElement).value)
  }
}
