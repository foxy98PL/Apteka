import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  constructor() { }
  showFiller = false;

  ngOnInit(){
    setTimeout(() => { 
    document.getElementById('test')?.click();
  }, 100);
  }
}

