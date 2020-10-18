import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  currentDate: string = dayjs().format('MMMM DD, YYYY');
  timeStamps: string[] = [];

  constructor() { }

  ngOnInit(): void {
    let timeStamp = dayjs().startOf('day');
    const tomorrow = timeStamp.add(1, 'day');

    while(timeStamp < tomorrow) {
      this.timeStamps.push(timeStamp.format('hh:mm a'));
      timeStamp = timeStamp.add(15, 'minute');
    }
  }

}
