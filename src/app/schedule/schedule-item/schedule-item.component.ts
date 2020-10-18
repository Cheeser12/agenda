import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  @Input()
  timeStamp: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
