import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject, Subject } from 'rxjs';
import { CountData } from './countData';
import { COUNTDATA } from './mock-countData';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  static countNumber = 0;
  



  cntNum : CountData;
  // public subject = new BehaviorSubject<CountData[]>;
  private subject: BehaviorSubject<CountData[]> = new BehaviorSubject<CountData[]>(COUNTDATA);


  constructor() {

  }

  ngOnInit() {
    return this.subject;
  }

  clickMinus(){
    
  }

  clickPlus(){
    const number = {number :CountComponent.countNumber++}
    COUNTDATA.push(number);
    this.subject.next(COUNTDATA);
  }

  getCount(){

  }
}
