import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page-carosuel',
  templateUrl: './front-page-carosuel.component.html',
  styleUrls: ['./front-page-carosuel.component.scss']
})
export class FrontPageCarosuelComponent implements OnInit {


 slides = [
      {'image': 'https://www.tekturkowo.pl/userdata/public/gfx/3613/169.jpg'}, 
      {'image': 'https://www.tekturkowo.pl/userdata/public/gfx/3613/169.jpg'}, {'image': 'https://www.tekturkowo.pl/userdata/public/gfx/3613/169.jpg'}, {'image': 'https://www.tekturkowo.pl/userdata/public/gfx/3613/169.jpg'}
    ];
  constructor() { }

  ngOnInit(): void {

  }

}
