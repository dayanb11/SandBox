import { Component } from '@angular/core';
import { Button } from '@syncfusion/ej2-angular-buttons';
import { fromEvent, interval, take, tap } from 'rxjs';

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
  buttonClick()
  {
    var obj:any=document.getElementById("button");
    obj.disabled="false"
alert("click")

  }
    ngOnInit()
    {

  const obs1$ = interval(1000)
           .pipe(
               take(6),
               tap((i:any) => console.log('obs'+i) )
           );
  obs1$.subscribe((value:any) => console.log("observer 1 received " + value));

obs1$.subscribe((value:any) => console.log("observer 2 received " + value));
const obs2$=fromEvent(document,'click');
obs2$.subscribe(evt=>console.log(evt));
  }
 }
