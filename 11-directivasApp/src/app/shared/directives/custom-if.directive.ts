import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnDestroy {

  @Input() set appCustomIf( condicion: boolean ) {
    if ( condicion ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {

  }

  ngOnDestroy(): void {
    console.log('Destruir CustomIfDirective');
  }

}
