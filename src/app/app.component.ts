import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'cheyutha';

  constructor() {

  }

  ngOnInit(): void {
    const element = document.getElementById('initialLoader');
    if (element) {
      element.parentNode.removeChild(element);
    }
  }


}
