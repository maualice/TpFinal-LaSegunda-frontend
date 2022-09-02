import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'gdp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      localStorage.setItem('isLogged', 'true');
      this._router.navigate(['dashboard']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
