import { Component, OnInit } from '@angular/core';
import { EventDate } from './eventlist';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent implements OnInit {
    eventList: EventDate[] = [];
    event: string = '';
    date: string = '';

    ngOnInit() {
    }

    addEvent() {
      const newEvent: EventDate = {
        eventList: '',
        event: this.event,
        date: this.date,
      };
      this.eventList.push(newEvent);
    }
}
