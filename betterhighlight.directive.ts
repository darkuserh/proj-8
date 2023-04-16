import { Directive, ElementRef, HostBinding, HostListener, Renderer2,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) {
 
   }
   @Input() defaultColor:string='transparent'
   @Input('appBetterhighlight') hightlightColor:string='pink'
   @Input() title:string='this is title'
   @HostBinding('style.backgroundColor') backgrtound:string=this.defaultColor
   @HostBinding('style.border') border:string="transparent"
   @HostListener('mouseenter') mouseenter(){
    this.backgrtound=this.hightlightColor
    this.border='1px solid red'

   }
   ngOnInit(): void {
     this.backgrtound=this.defaultColor
   }
   @HostListener('mouseleave') mouseleave(){
    this.backgrtound=this.defaultColor
    this.border='none'
   }
}
