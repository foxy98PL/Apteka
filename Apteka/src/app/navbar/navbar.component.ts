import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { LoginModalComponent } from '../login-modal/login-modal.component';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

  

export class NavbarComponent implements OnInit {

  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {}


  openModal() {
    this.modalRef = this.modalService.show(LoginModalComponent)
  }
  showFiller = false;
  ngOnInit(): void {

  }

}
