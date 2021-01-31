import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  resultNumber = 0;
  subject = new BehaviorSubject(0);

  constructor() {}

  ngOnInit() {
    this.subject.subscribe( num => {
      this.resultNumber = num;
    })
  }

  clickMinus(){
    this.subject.next(--this.resultNumber);
  }
  
  clickPlus(){
    this.subject.next(++this.resultNumber);
  }
}
