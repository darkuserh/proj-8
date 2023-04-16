import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Views';
  active:boolean=false;
  display:boolean=false;
  ocuppation:string='lawyer';
  DisplayNotice(){
    this.display=true
  }
}
