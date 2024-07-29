import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /** Define the variables for username and password */
  username: string = '';
  password: string = ''; 

  /** Function on the button to submit  */
  onSubmit() {
    
    // Implement the login logic here
    console.log('Username:',this.username);
    console.log('Password:',this.password);

    // Add authentication logic and navigate to the next page upon successful login

  }

}
