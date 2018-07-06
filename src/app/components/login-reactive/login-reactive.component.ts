import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {

  form = new FormGroup({
    usuarioNome: new FormControl('', Validators.email),
    usuarioSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });


  constructor() { }

}
