import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  CountsService
} from '../core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  public resultNumber;
  

  constructor(
    private countsService: CountsService,
    // private router: Router
  ) {}

  ngOnInit() {
    this.countsService.subject
  }

  clickMinusCount() {
    this.countsService.excuteCount(this.resultNumber - 1);
  }
  
  clickPlusCount() {
    this.countsService.excuteCount(this.resultNumber + 1);
  }
}
