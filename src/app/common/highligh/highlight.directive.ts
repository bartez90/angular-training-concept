import { Directive, OnInit, HostBinding, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
  @Input() defaultColor = this.elRef.nativeElement.style.backgroundColor;
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    // this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
