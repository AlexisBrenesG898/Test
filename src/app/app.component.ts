import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  *
  It will shoow the apo.component.html on the browser 
  */
  templateUrl: './app.component.html',
  template: 'Hola',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}


