import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {}
messageError:string='';
  signIn() {
    if (this.user.valid) {
    this.authService.signIn(this.user.value)
      .subscribe(
        res => {
          console.log(res);
          //this.authService.isAdmin(res.admin)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        err => {console.log(err);
                this.messageError = '*Correo electrónico o contraseña incorrectos'
              }
      )
    } else {
      this.user.markAllAsTouched();
    }
  }
}
