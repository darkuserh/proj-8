import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector:' [setBackground]'
})


export class SetBackgroundDerective implements OnInit{
    private element:ElementRef;
constructor( element:ElementRef){
    this.element=element
    // element.nativeElement.style.backgroundColor='#C8E6C9'
}
ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor='#C8E6C9'
}
}