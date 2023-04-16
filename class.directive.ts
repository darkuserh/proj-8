import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { 

  }

  @Input('appClass') set appClass(value:Object){
  let entries= Object.entries(value)
  // console.log(entries)
  for(let [className,condition] of entries){
    if(condition){
      this.renderer.addClass(this.element.nativeElement,className)
    }
  }
}
}
