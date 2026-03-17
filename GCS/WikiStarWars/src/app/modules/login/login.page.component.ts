import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: any;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  doLogin() {
    let email = this.formLogin.get('email').value;
    let password = this.formLogin.get('password').value;

    let user = this._userService.login(email, password);
    if (user) {
      this.router.navigateByUrl('/tabs');
    } else {
      this.error = 'Error, credenciales incorrectas';
    }
  }
}
