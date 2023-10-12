import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
})
export class BorderCardDirective {
  private defaultColor: string = '#f5f5f5';
  private initialColor: string = '#ffffff';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor); 
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmBorderCard') borderColor: string; // permet d'entre une variable à partir du directive
  // @Input('BorderCard') borderlive: string; //sans alias
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style = height + 'px';
  }
  private setBorder(color: string) {
    let border: string = `4px solid ${color}`;
    this.el.nativeElement.style.border = border;
  }
}
