import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // de la "a" miniscula a la "z" miniscula
  // de la "A" mayucula a la "Z" mayucula
  // + cualquier caracter adicional
  nombreApellidoPattern = '([a-zA-Z]+) ()';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.nombreApellidoPattern) ] ]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

