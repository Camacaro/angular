import { FormControl } from '@angular/forms';

// de la "a" miniscula a la "z" miniscula
// de la "A" mayucula a la "Z" mayucula
// + cualquier caracter adicional
export const nombreApellidoPattern = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = ( control: FormControl ) => {
  const valor = control.value?.trim().toLowerCase();

  if ( valor === 'strider' ) {
    return {
      noStrider: true
    };
  }

  // Todo bien
  return null;
};

