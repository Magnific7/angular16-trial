import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {
    console.log('app service constructor !!!');
  }
  testMethod(): string {
    return 'returning string';
  }
}
