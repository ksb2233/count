import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  public title = 'Count Example';
  public subject = new BehaviorSubject(0);
  public resultNumber;
  
  constructor() {}

  ngOnInit() {
    this.subject.subscribe( number => {
      this.resultNumber = number;
    });
  }

  clickMinusButton() {
    this.title = 'Minus Count!';
    this.subject.next(this.resultNumber - 1);
  }
  
  clickPlusButton() {
    this.title = 'Plus Count!';
    this.subject.next(this.resultNumber + 1);
  }
}
