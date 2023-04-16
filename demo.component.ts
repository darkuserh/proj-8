import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
ngOnInit(): void {
  // console.log(this.paragraphEl)
}
// ngAfterContentInit(){
//   this.paragraphEl.nativeElement.textContent='This is new paragraph value'
//   console.log(this.paragraphEl.nativeElement.textContent)
// }
// @ContentChild('paragraph') paragraphEl!:ElementRef;

}
