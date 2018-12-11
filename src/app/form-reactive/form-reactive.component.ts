import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidations } from './user-validations';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup( {
      usernameControl: new FormControl('', [
          Validators.required,
          UserValidations.cannotContainSpace
        ],
        [ UserValidations.shouldBeUnique]
      ),

      passworControl: new FormControl('', [
        Validators.required
      ])
    }
  );

  get usernameGetter() {
    return this.form.get('usernameControl');
  }
  get passwordGetter() {
    return this.form.get('passworControl');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  ngOnInit() {
  }

}
