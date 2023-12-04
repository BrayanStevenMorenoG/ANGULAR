import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  newPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword(): void {
    const isSuccess = this.authService.resetPassword(this.newPassword);

    if (isSuccess) {
      // Redirige a la página de inicio de sesión u otro lugar deseado
      // Puedes cambiar la ruta según tu aplicación
      this.router.navigate(['']);
    } else {
      // Maneja el caso en el que el restablecimiento de contraseña no fue exitoso
      console.log('Error al restablecer la contraseña');
    }
  }
}
