import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrl: './validate-email.component.css'
})
export class ValidateEmailComponent {

  email: string = '';

  constructor(private authService: AuthService) {}

  requestPasswordReset(): void {
    this.authService.requestPasswordReset(this.email);
  }

}
