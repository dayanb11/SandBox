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
  items = [
    { מזהה: 'אחד',סטטוס: 'הושלם', משימה: 'בניה' },
    { id: 'שניים', status: 'בעבודה', task: 'בחינה' },
    { id: 'שלוש', status: 'כשלון', task: 'הפצה' }
  ]
}