import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-first-app';

  constructor(private appService: AppService) {}

  ngOnInit() {
    const val = this.appService.testMethod();
    console.log('from app component value >>>', val);
  }
}
