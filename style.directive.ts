import { Directive,Input,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

@Input() set appStyle(style:Object){
let entries=Object.entries(style)
// console.log(entries)
for(let entry of entries){
  this.renderer.setStyle(this.element.nativeElement,entry[0],entry[1])
}
}
}
