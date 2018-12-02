import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
//import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'aio-test',
  //templateUrl: './test.component.html',
  template:
    `<p>Let's see if any of these search results help...</p>
  <aio-test></aio-test>`
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
