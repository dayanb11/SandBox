import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interval, take, tap } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
 {
  constructor()
  {
    const obs = interval(1000)
           .pipe(
               take(6),
               tap((i: any) => console.log('obs'+i) )
           );
  obs.subscribe((value: string) => console.log("observer 1 received " + value));

obs.subscribe((value: string) => console.log("observer 2 received " + value));
 }
}