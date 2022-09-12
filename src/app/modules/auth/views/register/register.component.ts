import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router'; //

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  /*
  user = {
    name: '',
    email: '',
    password: ''
  }
  */
  
  user = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.email, Validators.required] }),
    password: new FormControl('', { validators: [Validators.required, Validators.required] }),
  });
  

  constructor(
    private authService: AuthService,
    private router:Router
    ) {}

  ngOnInit(): void {}

  signUp() {
    if (this.user.valid) {
    console.log(this.user.value)
    
    this.authService.signUp(this.user.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      ) 
    } else {
      this.user.markAllAsTouched();
    }                                 
  }
}
