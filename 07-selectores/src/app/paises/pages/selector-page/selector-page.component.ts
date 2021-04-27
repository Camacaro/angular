import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required ],
    pais: ['', Validators.required ],
    frontera: ['', Validators.required ],
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  cargando = false;

  constructor(
    private formBuilder: FormBuilder,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.regiones = this.paisService.regiones;

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( () => {
          this.miFormulario.get('pais')?.reset('');
          // this.miFormulario.get('frontera')?.disable();
          this.paises = [];
          this.cargando = true;
        } ),
        switchMap( (region) => this.paisService.getPaisesPorRegion(region) )
      )
      .subscribe( paises => {
          this.paises = paises;
          this.cargando = false;
        });

    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe( region => {

    //     this.paisService.getPaisesPorRegion(region)
    //       .subscribe( paises => {
    //         this.paises = paises;
    //       });

    //   });

    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap(
        () => {
          this.miFormulario.get('frontera')?.reset('');
          this.fronteras = [];
          this.cargando = true;
          // this.miFormulario.get('frontera')?.enable();
        }
      ),
      switchMap( (code) => this.paisService.getPaisesPorCodigo(code) ),
      switchMap( (pais) => this.paisService.getPaisesPorCodigos( pais?.borders! ) )
    )
    .subscribe( paises => {
      this.fronteras = paises;
      this.cargando = false;
    });
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }

}
