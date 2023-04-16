import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SetBackgroundDerective } from './CustomDirective/setBackground.deirective';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './hover.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { StyleDirective } from './CustomDirective/style.directive';
import { IfDirective } from './if.directive'
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SetBackgroundDerective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
