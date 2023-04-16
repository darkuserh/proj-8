import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'bacckgroundColor','#C8E6C9')
    this.renderer.addClass(this.element.nativeElement,'container')
    this.renderer.setAttribute(this.element.nativeElement,'title','this is Example div')
}

  
}
