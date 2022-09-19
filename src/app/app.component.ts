import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  searchValue = '';

  arr = [
    {name: 'Piyush' , age: 10},
    {name: 'Test' , age: 10},
    {name: 'Meet' , age: 10},
  ]
}
