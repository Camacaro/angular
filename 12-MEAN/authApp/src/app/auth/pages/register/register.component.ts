import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    private router: Router,
    private authService: AuthService
  ) { }

  registro(): void {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

    const name = this.miFormulario.value.name;
    const email = this.miFormulario.value.email;
    const password = this.miFormulario.value.password;

    this.authService.registro(name, email, password)
    .subscribe( ok => {
      if ( ok === true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire({
          title: 'Error!',
          text: ok.toString(),
          icon: 'error'
        });
      }
    });
  }

}
