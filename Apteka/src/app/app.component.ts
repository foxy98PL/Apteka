import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  title = 'Apteka';
  ngOnInit(){
  }
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/socialMedia/icons8-facebook.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      "youtube",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/socialMedia/icons8-youtube-squared.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/socialMedia/icons8-twitter.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/socialMedia/icons8-instagram.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/socialMedia/icons8-linkedin.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      "messenger",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/socialMedia/icons8-facebook-messenger.svg"),
    );
  }
}
