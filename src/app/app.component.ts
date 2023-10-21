import { Component } from '@angular/core';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'Sandbox';
  constructor()
  {}
    ngOnInit()
    {

  const obs = interval(1000)
           .pipe(
               take(6),
               tap((i:any) => console.log('obs'+i) )
           );
  obs.subscribe((value:any) => console.log("observer 1 received " + value));

obs.subscribe((value:any) => console.log("observer 2 received " + value));
  }
 }
