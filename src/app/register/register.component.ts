import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userDetails: any = {
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    usuario: '',
    contrasena: '',
    email: '',
    fechaNacimiento: '',
    genero: '',
    pais: '',
    ciudad: '',
    telefono: '',
    direccion: '',
    aceptar: false,
  };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.userDetails);
    this.router.navigate(['']);
  }
}
