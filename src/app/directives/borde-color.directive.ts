import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBordeColor]'
})
export class BordeColorDirective {

  constructor(public elemento: ElementRef, public renderizador: Renderer2) {
    this.establecerColor()
    this.establecerBorde()
  }
  establecerColor() {
    this.renderizador.setStyle(
      this.elemento.nativeElement,
      'color',
      'white'
    )
  }
  establecerBorde() {
    this.renderizador.setStyle(
      this.elemento.nativeElement,
      'border-collapse',
      'collapse'
    )
    this.renderizador.setStyle(
      this.elemento.nativeElement,
      'border',
      '2px solid blue'
    )
  }
}
