import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['test4@test.com', [Validators.required, Validators.email] ],
    name: ['test 4', [Validators.required ] ],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  registro(): void {
    console.log(this.miFormulario.value)
    console.log(this.miFormulario.valid)

    this.router.navigateByUrl('/dashboard');
  }

}
