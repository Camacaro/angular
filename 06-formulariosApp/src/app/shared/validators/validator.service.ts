import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  noPuedeSerStrider( control: FormControl ): ValidationErrors|null {
    const valor = control.value?.trim().toLowerCase();

    if ( valor === 'strider' ) {
      return {
        noStrider: true
      };
    }

    // Todo bien
    return null;
  }

  camposIguales( campo1: string, campo2: string ): ValidationErrors|null {

    return ( formGroup: AbstractControl ): ValidationErrors|null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      console.log(pass1, pass2);

      if ( pass1 !== pass2 ) {
        // formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }

      // Lo malo de esta solucion es que al setear null, quitara cualquier
      // otro error que le hayamos puesto al campo
      // formGroup.get(campo2)?.setErrors(null);
      return null;
    };
  }
}
