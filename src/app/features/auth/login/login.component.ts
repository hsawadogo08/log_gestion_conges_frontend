import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../../models/login.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  login!: Login;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.login = new Login();
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.formLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onGetLoginInfos() {
    this.login = this.formLogin.value as Login;
    this.onLogin();
  }

  onLogin(): void {
    this.authService.onAuthenticate(this.login).subscribe({
      next: response => {
        this.authService.saveToken(response.id_token!);
        this.router.navigate(['/pages']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
