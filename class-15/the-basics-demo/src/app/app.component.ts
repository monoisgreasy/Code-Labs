import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-basics-demo';
  width: number = 100

  users = [
    {
      username: "J0hn123",
      age: 20
    },
    {
    username: "amy123",
    age: 25
    },
  {
    username: "Jamie123",
    age: 16
  }
  ]

  onToggleButton(){
    this.title = "Change title";
  }
}
