import { EventlistService } from './../../services/eventlist.service';
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

  constructor(private eventlistService: EventlistService){
  }

  ngOnInit(): void {
    this.eventList = this.eventlistService.getEvents();
  }

  addEvent(): void {
    if (this.event && this.date) {
      const newEvent: EventDate = {
        event: this.event, date: this.date,
        eventList: '',
        name: function (arg0: string, name: any): unknown {
          throw new Error('Function not implemented.');
        }
      };
      this.eventlistService.addEvent(newEvent);
      this.event = '';
      this.date = '';
    }
  }

  updateEvent(index: number): void {
    const currentEvent = this.eventList[index];
    const newEvent = prompt('Enter new event name:', currentEvent.event);
    const newDate = prompt('Enter new event date:', currentEvent.date);

    if (newEvent !== null && newEvent.trim() !== '' && newDate !== null && newDate.trim() !== '') {
      this.eventlistService.updateEvent(index, {
        event: newEvent.trim(), date: newDate.trim(),
        eventList: '',
        name: function (arg0: string, name: any): unknown {
          throw new Error('Function not implemented.');
        }
      });
    }
  }

  deleteEvent(index: number): void {
    this.eventlistService.deleteEvent(index);
  }
}
