import { Component } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    a {
      background-color: goldenrod;
    }
    .navbar-brand {
      color: red;
    }
    `
  ]
})

export class HeaderComponent {

}
