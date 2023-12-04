import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userDetails: any = {
    usuario: '',
    contrasena: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const isAuthenticated = this.authService.login(this.userDetails.usuario, this.userDetails.contrasena);

    if (isAuthenticated) {
      alert('Bienvenido')
      this.router.navigate(['menu']);
    } else {
      alert('Credenciales no válidas');
    }
  }
}
