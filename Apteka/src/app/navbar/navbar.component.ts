import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { DeviceDetectorService ,DeviceInfo } from 'ngx-device-detector';
import { CheckoutComponent } from '../checkout/checkout.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

  

export class NavbarComponent implements OnInit {

  modalRef: MDBModalRef;
  displayDevice:boolean
  deviceInfo:DeviceInfo;
  device:string
  constructor(private modalService: MDBModalService,private deviceDetector:DeviceDetectorService) {}
  openModal() {
    this.modalRef = this.modalService.show(LoginModalComponent)
  }
  openCheckout(){
    this.modalRef = this.modalService.show(CheckoutComponent)
  }
  showFiller = false;
  ngOnInit(): void {
    this.deviceInfo=this.deviceDetector.getDeviceInfo()
    this.device=this.deviceInfo.deviceType
    if(this.device.match("mobile")){
      this.displayDevice=true
    }
    console.log(window.innerWidth)
  }

}
