import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // Validaciones como un simple archivo
  // miFormulario: FormGroup = this.fb.group({
  //   nombre: ['', [ Validators.required, Validators.pattern( nombreApellidoPattern ) ] ],
  //   email: ['', [ Validators.required, Validators.pattern( emailPattern ) ] ],
  //   username: ['', [ Validators.required, noPuedeSerStrider ] ],
  // });

  // validaciones como una clase
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ],  ],
    password: ['', [ Validators.required, Validators.minLength(6)] ],
    password2: ['', [ Validators.required ] ],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  });

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.required ) {

      return 'Email es obligatorio';

    } else if ( errors?.pattern) {

      return 'El valor ingresado no tiene formato de correo';

    } else if ( errors?.emailTomado) {

      return 'El correo ingresado ya fue tomado';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jesus Camacaro',
      email: 'test1@test.com',
      username: 'jcamacaro',
      password: '123456',
      password2: '123456'
    });
  }

  compoNoValido( campo: string ): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  emailrequired(): boolean | undefined {
    return this.miFormulario.get('email')?.errors?.required
      && this.miFormulario.get('email')?.touched;
  }

  emailfortmat(): boolean | undefined {
    return this.miFormulario.get('email')?.errors?.pattern
      && this.miFormulario.get('email')?.touched;
  }

  emailTomado(): boolean | undefined {
    return this.miFormulario.get('email')?.errors?.emailTomado
      && this.miFormulario.get('email')?.touched;
  }

  submitFormulario(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}


