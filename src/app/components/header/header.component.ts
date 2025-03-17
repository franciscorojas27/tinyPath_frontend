import { Component } from '@angular/core';
import { LogoComponent } from "@UI/logo/logo.component";
import { ButtonComponent } from "@UI/button/button.component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onSave(){
    console.log("buenas");
  }
}
