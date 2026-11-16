import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login(): void {

    const success = this.authService.login(this.username, this.password);

    if (success) {

      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

      this.router.navigateByUrl(returnUrl || '/dashboard');

    }
    else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
